import { useState, cloneElement } from 'react'
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Slide from '@material-ui/core/Slide'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Grow from '@material-ui/core/Grow'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Hidden from '@material-ui/core/Hidden'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import NavCrumbs from './NavCrumbs'
import HomeMenu from './HomeMenu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.grey[100],
  },
  toolBar: {
    minHeight: 48,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  crumbs: {
    flexGrow: 1,
    color: theme.palette.primary.main,
  },
  toggleLabel: {
    color: theme.palette.primary.main,
  },
}))

// AppBar will cast a box shadow when content scrolls under it
function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 })
  const toggleDisplay = useScrollTrigger({
    disableHysteresis: true,
    threshold: 110,
  })
  return (
    <Slide
      appear={true}
      direction='down'
      in={!trigger}
      display={toggleDisplay && 'none'}>
      {children}
    </Slide>
  )
}
function ShowOnScroll({ children }) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 125 })
  return (
    <Grow appear={false} direction='right' in={trigger}>
      {children}
    </Grow>
  )
}

export default function MenuAppBar(props) {
  const { darkMode, setDarkMode } = props
  const classes = useStyles()

  const toggleThemeColorChange = event => {
    setDarkMode(event.target.checked)
  }

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar} position='fixed'>
          <Toolbar className={classes.toolBar}>
            <HideOnScroll {...props}>
              <Box className={classes.crumbs}>
                <HomeMenu />
              </Box>
            </HideOnScroll>
            <ShowOnScroll {...props}>
              <Box className={classes.crumbs}>
                <NavCrumbs />
              </Box>
            </ShowOnScroll>
            <Hidden xsDown>
              <FormGroup>
                <FormControlLabel
                  className={classes.toggleLabel}
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
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}
