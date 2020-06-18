import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import HomeMenu from './HomeMenu'

function MainDrawer(props) {
  const { drawerWidth, handleDrawerToggle, setAppBarTitle, mobileOpen, window } = props
  const theme = useTheme()
  const container =
    window !== undefined ? () => window().document.body : undefined

  const useStyles = makeStyles(theme => ({
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
  const classes = useStyles()
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
          {<HomeMenu drawerWidth={drawerWidth} setAppBarTitle={setAppBarTitle} />}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open>
          {<HomeMenu drawerWidth={drawerWidth} setAppBarTitle={setAppBarTitle} />}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default MainDrawer
