import { cloneElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Slide from '@material-ui/core/Slide'
import Box from '@material-ui/core/Box'
import Switch from '@material-ui/core/Switch'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import NavCrumbs from './NavCrumbs'
import Menu from './Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    minHeight: 48,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  menuBox: {
    [theme.breakpoints.down(740)]: {
      display: 'none',
    },
  },
  toggleLabel: {
    color:
    theme.palette.type === 'dark'
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
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

export default function MenuAppBar(props) {
  const { darkMode, setDarkMode } = props
  const classes = useStyles()
  const showScrolltrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const toggleThemeColorChange = event => {
    setDarkMode(event.target.checked)
  }
  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar color='default' position='fixed'>
          <Toolbar className={classes.toolBar}>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'>
              <Grid item sm={12} lg={10} xl={8}>
                <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='center'>
                  <Box maxWidth='fit-content'>
                    <Menu />
                  </Box>
                  <Box className={classes.menuBox}>
                    <Slide
                      direction='down'
                      in={showScrolltrigger}
                      mountOnEnter
                      unmountOnExit>
                      <Box>
                        <NavCrumbs />
                      </Box>
                    </Slide>
                  </Box>
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
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}
