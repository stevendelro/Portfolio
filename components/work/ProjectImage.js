import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paperImageContainer: {
    margin: theme.spacing(0, 4),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 3, 0, 0),
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

  // Right Side Image Styles
  paperImageContainer_R: {
    margin: theme.spacing(0, 4, 0),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 0, 0, 3),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
}))

function ProjectImage({ imageRight, isSmallScreen, image }) {
  const classes = useStyles()
  return (
    <Paper
      className={
        imageRight && !isSmallScreen
          ? classes.paperImageContainer_R
          : classes.paperImageContainer
      }
      elevation={7}>
      <CardMedia
        component='img'
        className={classes.image}
        title='Weathernaut App'
        src={image}
        onClick={() => (window.location.href = 'https://weathernaut.now.sh')}
      />
    </Paper>
  )
}

export default ProjectImage
