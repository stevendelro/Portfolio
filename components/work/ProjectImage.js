import { makeStyles, useTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import MuiLink from '../MuiLink'

const useStyles = makeStyles(theme => ({
  projectImage__container: {
    margin: theme.spacing(0, 4),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 3, 0, 0),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },

  projectImage__image: {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    verticalAlign: 'middle',
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.shape.borderRadius,
    },
  },

  // Right Side Image Styles
  projectImage__container_R: {
    margin: theme.spacing(0, 4, 0),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 0, 0, 3),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
}))

export default function ProjectImage({
  imageRight,
  isSmallScreen,
  projectInfo,
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreenOrSmaller = useMediaQuery(theme.breakpoints.down('sm'))
  const { name, imagePath } = projectInfo
  return (
    <section id='project__projectImage'>
      <MuiLink
        as={`/work/${name.toLowerCase()}`}
        href='/work/[projectDetails]'
        naked>
        <Paper
          className={
            imageRight && !isSmallScreen
              ? classes.projectImage__container_R
              : classes.projectImage__container
          }
          elevation={7}>
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
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a
                href='https://videojs.com/html5-video-support/'
                target='_blank'>
                supports HTML5 video
              </a>
            </p>
          </video>
        </Paper>
      </MuiLink>
    </section>
  )
}
