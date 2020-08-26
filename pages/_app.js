import { createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import { useState, useEffect, useMemo, createContext } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import Hidden from '@material-ui/core/Hidden'
import Prism from 'prismjs'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { projectInformation } from '../components/work/ProjectInformation'
import MobileNav from '../components/layout/MobileNav'
import MyAppBar from '../components/layout/MyAppBar'
import MyFooter from '../components/layout/MyFooter'

import '../public/fonts.css'
import '../public/syntaxHighlighting.css'

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

export const ProjectInformation = createContext()
export const primaryColor = '#144d53'
export const secondaryColor = '#ff9100'

export default function MyApp(props) {
  const classes = useStyles()
  const { Component, pageProps } = props
  const [darkMode, setDarkMode] = useState(
    // This will check the user/system settings to see if dark mode is preferred.
    useMediaQuery('(prefers-color-scheme: dark)')
  )
  const handleDarkMode = darkMode ? secondaryColor : primaryColor
  const theme = useMemo(
    () =>
      createMuiTheme({
        themeName: 'greenOrange',
        palette: {
          primary: { main: primaryColor },
          secondary: { main: secondaryColor },
          common: {
            defaultDarkBackground: '#303030',
            defaultLightBackground: '#f5f5f5',
          },
          type: darkMode ? 'dark' : 'light',
        },
        typography: {
          h1: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
          },
          h2: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
          },
          h3: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
          },
          h4: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
          },
          h5: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
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

  // Scroll to the top of the page on nav click.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [Component])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    Prism.highlightAll() // syntax highlighting for code
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
          <Hidden xsDown>
            {/* Hide Desktop AppBar on mobile screens */}
            <MyAppBar darkMode={darkMode} setDarkMode={setDarkMode} />
          </Hidden>
          <Hidden smUp>
            {/* Hide Mobile AppBar on desktop screens */}
            <MobileNav darkMode={darkMode} setDarkMode={setDarkMode} />
          </Hidden>
          <main className={classes.content}>
            <Hidden xsDown>
              {/* This div is a toolbar spacer to keep content from being under the AppBar*/}
              <div className={classes.toolbar} />
            </Hidden>
            <ProjectInformation.Provider value={projectInformation}>
              {/* Text data to display alongside projects */}
              <Component {...pageProps} />
            </ProjectInformation.Provider>
            <MyFooter />
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}
