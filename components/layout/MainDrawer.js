import HomeList from './drawerLists/HomeList'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Logo from '../../public/Logo'

const logoColor = '#144d53'

const useDrawerMenuStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawerLogo: {
    marginBottom: '-64px',
  },
}))

// Dynamically change the drawer list on page change.
function DrawerMenu() {
  const classes = useDrawerMenuStyles()
  return (
    <>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item className={classes.drawerLogo}>
          <Logo height='30px' width='30px' color={logoColor} />
        </Grid>
      </Grid>
      <div className={classes.toolbar} />
      <HomeList />
    </>
  )
}

function MainDrawer(props) {
  const { drawerWidth, handleDrawerToggle, mobileOpen, window } = props
  const theme = useTheme()
  const container =
    window !== undefined ? () => window().document.body : undefined

  const useMainDrawerStyles = makeStyles(theme => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }))
  const classes = useMainDrawerStyles()
  return (
    <nav className={classes.drawer} aria-label='main navigation'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation='css'>
        <Drawer
          container={container}
          variant='temporary'
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {<DrawerMenu />}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open>
          {<DrawerMenu />}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default MainDrawer
