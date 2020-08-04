import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  projectImage__ROOT: {
    margin: theme.spacing(0, 4, 0),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 0, 0, 3),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  projectImage__image: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))

export default function ProjectImage({ title, imagePath }) {
  const classes = useStyles()
  return (
    <section id='projectDetailsPage__image'>
      <Paper className={classes.projectImage__ROOT} elevation={7}>
        <CardMedia
          component='img'
          className={classes.projectImage__image}
          title={title}
          image={imagePath}
        />
      </Paper>
    </section>
  )
}
