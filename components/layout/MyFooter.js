import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

import Logo from '../Logo'

const useStyles = makeStyles(theme => ({
  Footer__root: {
    flexGrow: 1,
  },
  Footer__appBar: {
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
  Footer__nameAndDate: {
    paddingTop: theme.spacing(1)
  },
  Footer__spacer: {
    height: 56,
  },
}))

export default function MyFooter() {
  const classes = useStyles()
  return (
    <footer className={classes.Footer__root}>
      <AppBar position='static' elevation={0} className={classes.Footer__appBar}>
        {/* LOGO */}
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Logo />
          </Grid>
          {/* NAME AND DATE */}
          <Grid className={classes.Footer__nameAndDate} item>
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
        <div className={classes.Footer__spacer} />
      </Hidden>
    </footer>
  )
}
