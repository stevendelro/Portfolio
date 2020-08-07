import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
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
  footer__logo: {
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': { transform: 'scale(1.1)' },
  },
  footer__nameDate: {
    paddingTop: theme.spacing(1),
  },
}))

export default function MyFooter(props) {
  const classes = useStyles()

  function ScrollTop({ children }) {
    const handleClick = () => {
      const anchor = document.querySelector('#back-to-top-anchor')
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
    return (
      <div onClick={handleClick} role='presentation'>
        {children}
      </div>
    )
  }
  return (
    <footer className={classes.myFooter__ROOT}>
      <AppBar
        position='static'
        elevation={0}
        className={classes.footer__appBar}>
        {/* LOGO */}
        <Grid container direction='column' justify='center' alignItems='center'>
          <ScrollTop {...props}>
            <Grid item className={classes.footer__logo}>
              <Logo aria-label='scroll-back-to-top' />
            </Grid>
          </ScrollTop>
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
    </footer>
  )
}
