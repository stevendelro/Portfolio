import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  description: {
    padding: theme.spacing(6, 7, 0),
    textTransform: 'italic',
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(6, 4, 0),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 1, 0),
    },
  },
}))
export default function Description({ description }) {
  const classes = useStyles()
  return (
    <Container maxWidth='md'>
      <Typography
        className={classes.description}
        variant='body2'
        color='textSecondary'
        align='center'>
        {description}
      </Typography>
    </Container>
  )
}
