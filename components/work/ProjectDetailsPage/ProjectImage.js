import { makeStyles } from '@material-ui/core/styles'
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
    verticalAlign: 'middle',
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
        <video
          className={classes.projectImage__image}
          height='auto'
          width='100%'
          autoPlay
          muted
          loop
          alignSelf='center'
          preload='auto'
          poster={imagePath}
          data-setup='{}'>
          <source src='/projectMedia/weathernaut.mp4' type='video/mp4'></source>
          <p className='vjs-no-js'>
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a href='https://videojs.com/html5-video-support/' target='_blank'>
              supports HTML5 video
            </a>
          </p>
        </video>
      </Paper>
    </section>
  )
}
