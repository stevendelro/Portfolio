import Grid from '@material-ui/core/Grid'
import Logo from '../../public/logo/jsx/Logo'
import NameStamp from '../NameStamp'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    color: theme.palette.grey[300],
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - 180px)`,
      marginLeft: '180px',
    },
    nameStamp: {

    }
  },
}))

function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Logo color='#ff9100'/>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
