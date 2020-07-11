import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../layout/Logo'

const useStyles = makeStyles(theme => ({
  rootFooter: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
    padding: theme.spacing(7, 0, 7, 0),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(10, 0, 10, 0),
    },
  },
  text: {
    paddingTop: theme.spacing(1)
  },
  title: {
    // flexGrow: 1,
    alignSelf: 'flex-end',
  },
  mobileNavSpacer: {
    height: 56,
  },
}))

export default function MyFooter({ scrollTrigger }) {
  const classes = useStyles()
  return (
    <footer className={classes.rootFooter}>
      <AppBar position='static' elevation={0} className={classes.appBar}>
        {/* LOGO */}
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Logo />
          </Grid>
          {/* NAME AND DATE */}
          <Grid className={classes.text} item>
            <Typography variant='overline'>Steven Del Rosario</Typography>
            <Typography variant='overline'>
              {' '}
              &copy; {`${new Date().getFullYear()}.`}
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      <Hidden smUp>
        <div className={classes.mobileNavSpacer} />
      </Hidden>
    </footer>
  )
}
