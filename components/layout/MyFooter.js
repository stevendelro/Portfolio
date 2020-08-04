import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

import Logo from '../Logo'

const useStyles = makeStyles(theme => ({
  myFooter__ROOT: {
    flexGrow: 1,
  },
  footer__appBar: {
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
  footer__nameDate: {
    paddingTop: theme.spacing(1),
  },
  footer__divSpacer: {
    height: 56,
  },
}))

export default function MyFooter() {
  const classes = useStyles()
  return (
    <footer className={classes.myFooter__ROOT}>
      <AppBar
        position='static'
        elevation={0}
        className={classes.footer__appBar}>
        {/* LOGO */}
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Logo />
          </Grid>
          {/* NAME AND DATE */}
          <Grid className={classes.footer__nameDate} item>
            <Typography variant='overline'>Steven Del Rosario</Typography>
            <Typography variant='overline'>
              {' '}
              &copy; {`${new Date().getFullYear()}.`}
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      {/* EMPTY DIV FOR SPACER */}
      <Hidden smUp>
        <div className={classes.footer__divSpacer} />
      </Hidden>
    </footer>
  )
}
