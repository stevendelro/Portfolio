import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'

// AppBar will cast a box shadow when content scrolls under it
function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

function MyAppBar(props) {
  const { drawerWidth, handleDrawerToggle, appBarTitle } = props
  const useStyles = makeStyles(theme => ({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  }))
  const classes = useStyles()
  return (
    <ElevationScroll {...props}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'>
            <Grid item>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                className={classes.menuButton}>
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant='h6' noWrap>
                {appBarTitle}
              </Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default MyAppBar
