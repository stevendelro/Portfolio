import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  paperImageContainer: {
    margin: theme.spacing(0, 4, 0),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 0, 0, 3),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))

export default function Image({ title, imagePath, website }) {
  const classes = useStyles()
  return (
    <section>
      <Paper className={classes.paperImageContainer} elevation={7}>
        <CardMedia
          component='img'
          onClick={() => (window.location.href = website)}
          className={classes.image}
          title={title}
          image={imagePath}
        />
      </Paper>
    </section>
  )
}
