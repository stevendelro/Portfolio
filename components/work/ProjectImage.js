import { makeStyles, useTheme } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
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
          <Tooltip
            disableTouchListener
            arrow
            title='Click For Details'
            placement={isSmallScreenOrSmaller ? 'top' : 'bottom'}>
            <CardMedia
              component='img'
              className={classes.projectImage__image}
              src={imagePath}
            />
          </Tooltip>
        </Paper>
      </MuiLink>
    </section>
  )
}
