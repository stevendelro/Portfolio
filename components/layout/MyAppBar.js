import { useState, cloneElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Hidden from '@material-ui/core/Hidden'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import NavCrumbs from './NavCrumbs'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.grey[100],
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
function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

export default function MenuAppBar(props) {
  const { toggleShowDrawer, darkMode, setDarkMode } = props
  const classes = useStyles()

  const toggleThemeColorChange = event => {
    setDarkMode(event.target.checked)
  }

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar} position='fixed'>
          <Toolbar>
            <Hidden xsDown>
              <IconButton
                edge='start'
                className={classes.menuButton}
                onClick={toggleShowDrawer()}
                color='inherit'
                aria-haspopup='true'
                aria-label='main-menu'>
                <MenuIcon />
              </IconButton>
            </Hidden>

            <Box className={classes.crumbs}>
              <NavCrumbs />
            </Box>
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
