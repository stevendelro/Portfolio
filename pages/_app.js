import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'
import MyAppBar from '../components/layout/MyAppBar'
import MobileNav from '../components/layout/MobileNav'
import MyFooter from '../components/layout/MyFooter'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Prism from 'prismjs'
import '../public/syntaxHighlighting.css'
// import 'highlight.js/styles/atom-one-dark.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    width: '100vw',
  },
}))

export default function MyApp(props) {
  const classes = useStyles()
  const { Component, pageProps } = props
  const [darkMode, setDarkMode] = useState(
    // This will check the user/system settings to see if dark mode is preferred.
    useMediaQuery('(prefers-color-scheme: dark)')
  )

  const theme = useMemo(
    () =>
      createMuiTheme({
        themeName: 'greenOrange',
        palette: {
          primary: { main: '#144d53' },
          secondary: { main: '#ff9100' },
          common: {
            defaultDarkBackground: '#303030',
            defaultLightBackground: '#f5f5f5',
          },
          type: darkMode ? 'dark' : 'light',
        },
        typography: {

          h1: {
            fontFamily: 'Calistoga',
            color: darkMode ? '#ff9100' : '#144d53',
          },
          h2: {
            fontFamily: 'Calistoga',
            color: darkMode ? '#ff9100' : '#144d53',
          },
          h3: {
            fontFamily: 'Calistoga',
            color: darkMode ? '#ff9100' : '#144d53',
          },
          h4: {
            fontFamily: 'Calistoga',
            color: darkMode ? '#ff9100' : '#144d53',
          },
          h5: {
            fontFamily: 'Calistoga',
            color: darkMode ? '#ff9100' : '#144d53',
          },
          body2: {
            fontFamily: '"Roboto Slab", "Courier New", "serif"', // Main body text
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.00938em',
            lineHeight: 1.5,
          },
        },
      }),
    [darkMode]
  )

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    Prism.highlightAll() // syntax highlighting for code
    Prism.plugins.autoloader.languages_path = '/prism-components' // auto-detect language to highlight
  }, [Component])
  return (
    <>
      <Head>
        <title>Steven's Portfolio</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          {/* Hide Top AppBar on mobile screens */}
          <Hidden xsDown>
            <MyAppBar darkMode={darkMode} setDarkMode={setDarkMode} />
          </Hidden>
          <main className={classes.content}>
            <Hidden xsDown>
              <div className={classes.toolbar} />
            </Hidden>
            <Component {...pageProps} />
            {/* Display bottom AppBar for a better mobile experience */}
            <Hidden smUp>
              <MobileNav darkMode={darkMode} setDarkMode={setDarkMode} />
            </Hidden>
            <MyFooter />
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}
