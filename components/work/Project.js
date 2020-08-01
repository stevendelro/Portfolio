import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ProjectImage from './ProjectImage'
import ProjectText from './ProjectText'

const useStyles = makeStyles(theme => ({
  rootProject: {
    padding: theme.spacing(10,0)
  },
  imageLeftStyles: {
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(55),
      margin: theme.spacing(3, 0, 5),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(40),
    },
  },
  imageRightStyles: {
    cursor: 'pointer',
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4),
    },
  },
  // Right Side Image - Text Styles
  textAlign_R: {
    textAlign: 'right',
  },
  textAlign_L: {
    textAlign: 'left',
  },
}))

export default function Project({ orientation, projectInfo }) {
  const theme = useTheme()
  const classes = useStyles()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  // Set orientation to boolean, default to image being to the right of the text
  // on large screens.
  let imageRight = true
  if (orientation === 'imageLeft') imageRight = false
  // Make sure that the information text appears in the correct order
  // independant of the what side the image is on.
  let rowDirection = 'row' // default to row
  if (imageRight) {
    rowDirection = isSmallScreen ? 'row' : 'row-reverse'
  }
  const textStyles =
    imageRight && !isSmallScreen
      ? classes.imageRightStyles && classes.textAlign_R
      : classes.imageLeftStyles && classes.textAlign_L
  return (
    <section className={classes.rootProject}>
      <Grid
        container
        direction={isSmallScreen ? 'column' : rowDirection}
        justify='space-between'
        alignItems={isSmallScreen ? 'center' : 'flex-start'}>
        {/* IMAGE SIDE */}
        <Grid item xs={12} sm={11} md={8}>
          <ProjectImage
            imageRight={imageRight}
            isSmallScreen={isSmallScreen}
            projectInfo={projectInfo}
          />
        </Grid>

        {/* TEXT SIDE */}
        <Grid item className={textStyles} xs={12} sm={11} md={4}>
          <ProjectText
            imageRight={imageRight}
            isSmallScreen={isSmallScreen}
            rowDirection={rowDirection}
            projectInfo={projectInfo}
          />
        </Grid>
      </Grid>
    </section>
  )
}
