import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import WorkProjectDemo from './WorkProjectDemo'
import WorkProjectText from './WorkProjectText'

const useStyles = makeStyles(theme => ({
  workProject__ROOT: {
    padding: theme.spacing(10, 0, 0),
  },
  workProject__imageLeft: {
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
  workProject__imageRightStyles: {
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

export default function WorkProject({ orientation, projectInfo }) {
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
  const workProject__text =
    imageRight && !isSmallScreen
      ? classes.workProject__imageRightStyles && classes.textAlign_R
      : classes.workProject__imageLeft && classes.textAlign_L

  return (
    <section id='project' className={classes.workProject__ROOT}>
      <Grid
        container
        direction={isSmallScreen ? 'column' : rowDirection}
        justify='space-between'
        alignItems='center'>
        {/* IMAGE SIDE */}
        <Grid item xs={12} sm={11} md={9}>
          <WorkProjectDemo
            imageRight={imageRight}
            isSmallScreen={isSmallScreen}
            projectInfo={projectInfo}
          />
        </Grid>

        {/* TEXT SIDE */}
        <Grid item className={workProject__text} xs={12} sm={11} md={3}>
          <WorkProjectText
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
