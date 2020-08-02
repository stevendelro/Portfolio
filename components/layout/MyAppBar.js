import { cloneElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'
import Switch from '@material-ui/core/Switch'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import Menu from './Menu'
import NavCrumbs from './NavCrumbs'

const useStyles = makeStyles(theme => ({
  MyAppBar__root: {
    flexGrow: 1,
  },
  MyAppBar__appBar: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  MyAppBar__crumbs: {
    [theme.breakpoints.down(740)]: {
      display: 'none',
    },
  },
  MyAppBar__darkModeSwitch: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  },
}))

// AppBar will cast a Container shadow when content scrolls under it
function ElevationScroll({ children }) {
  const elevationScrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  return cloneElement(children, {
    elevation: elevationScrollTrigger ? 4 : 0,
  })
}

export default function MenuAppBar(props) {
  const { darkMode, setDarkMode } = props
  const classes = useStyles()
  const crumbScrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const toggleThemeColorChange = event => {
    setDarkMode(event.target.checked)
  }
  return (
    <nav id='MyAppBar' className={classes.MyAppBar__root}>
      <ElevationScroll {...props}>
        <AppBar className={classes.MyAppBar__appBar} position='fixed'>
          <Container maxWidth='lg'>
            <Toolbar disableGutters>
              <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='center'>
                <Box maxWidth='fit-content'>
                  <Menu />
                </Box>
                <Box className={classes.MyAppBar__crumbs}>
                  <Slide
                    direction='down'
                    in={crumbScrollTrigger}
                    mountOnEnter
                    unmountOnExit>
                    <Box>
                      <NavCrumbs />
                    </Box>
                  </Slide>
                </Box>
                <FormGroup>
                  <FormControlLabel
                    className={classes.MyAppBar__darkModeSwitch}
                    control={
                      <Switch
                        checked={darkMode}
                        onChange={toggleThemeColorChange}
                        aria-label='dark mode switch'
                      />
                    }
                    label={darkMode ? 'Dark' : 'Light'}
                  />
                </FormGroup>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </nav>
  )
}
