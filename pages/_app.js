import { useState, useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../components/styles/theme'
import { makeStyles } from '@material-ui/core/styles'
import MyAppBar from '../components/layout/MyAppBar'
import MainDrawer from '../components/layout/MainDrawer'

const drawerWidth = 90
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}))

export default function MyApp(props) {
  const classes = useStyles()
  const { Component, pageProps } = props
  const [openDrawer, setOpenDrawer] = useState(false)
  const [appBarTitle, setAppBarTitle] = useState('Steven\'s Portfolio')

  const toggleShowDrawer = () => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setOpenDrawer(!openDrawer)
  }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <MyAppBar
            toggleShowDrawer={toggleShowDrawer}
          />
          <MainDrawer
            toggleShowDrawer={toggleShowDrawer}
            setAppBarTitle={setAppBarTitle}
            openDrawer={openDrawer}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}
