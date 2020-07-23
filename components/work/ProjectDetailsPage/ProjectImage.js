import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: 0,
    height: '50vw',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('lg')]: {
      width: '1040px',
      maxHeight: '630px',
    },
    [theme.breakpoints.down('lg')]: {
      width: '100vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  image: {
    width: '100%',
    height: '100%',
  },
}))

export default function ProjectImage({ title, coverImage }) {
  const classes = useStyles()
  return (
    <section id='PostDetailsPage__Image'>
      <Paper as='figure' className={classes.paper} elevation={0}>
        <CardMedia
          className={classes.image}
          title={title}
          image={coverImage.url}
        />
      </Paper>
    </section>
  )
}
