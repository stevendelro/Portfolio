import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  description: {
    padding: theme.spacing(5, 7, 7),
    textTransform: 'italic',
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(5, 4, 4),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(5, 1, 1),
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
