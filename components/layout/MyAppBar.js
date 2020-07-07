import { useState, cloneElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

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
  title: {
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
            <IconButton
              edge='start'
              className={classes.menuButton}
              onClick={toggleShowDrawer()}
              color='inherit'
              aria-haspopup='true'
              aria-label='main-menu'>
              <MenuIcon />
            </IconButton>

            <Typography variant='h6' className={classes.title}>
              Home
            </Typography>
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}
