import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import MuiLink from '../../MuiLink'
import Video from '../../Video'

const useStyles = makeStyles(theme => ({
  workProjectDemo__container: {
    margin: theme.spacing(0, 4),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 3, 0, 0),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  // Right Side Image Styles
  workProjectDemo__container_R: {
    margin: theme.spacing(0, 4, 0),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 0, 0, 3),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
}))

// Custom tooltips
const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.primary.main,
    boxShadow: theme.shadows[7],
    fontSize: 11,
  },
}))(Tooltip)

const DarkTooltip = withStyles(theme => ({
  tooltip: {
    boxShadow: theme.shadows[7],
    fontSize: 11,
  },
}))(Tooltip)

export default function WorkProjectDemo({
  imageRight,
  isSmallScreen,
  projectInfo,
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isPhoneScreenDown = useMediaQuery(theme.breakpoints.down('xs'))
  const isTabletScreenDown = useMediaQuery(theme.breakpoints.down('md'))
  const { videoPath, imagePath, name } = projectInfo

  const methodOfInteraction = isTabletScreenDown ? 'Tap' : 'Click'
  const isDarkMode = theme.palette.type === 'dark' ? true : false

  // Handle tooltip styles for dark mode.
  const ThemedTooltip = isDarkMode ? DarkTooltip : LightTooltip

  const demoWithLink = (
    <MuiLink
      as={`/work/${name.toLowerCase()}`}
      href='/work/[projectDetails]'
      naked>
      <Paper
        className={
          imageRight && !isSmallScreen
            ? classes.workProjectDemo__container_R
            : classes.workProjectDemo__container
        }
        elevation={7}>
        <Video imagePath={imagePath} videoPath={videoPath} />
      </Paper>
    </MuiLink>
  )

  /**
   * Tiny screens had autoplay disabled and video controls visible.
   * If the video is encapsulated within a link, interfacing with
   * the video controls causes the route to change.
   */
  const demoWithoutLink = (
    <Paper
      className={
        imageRight && !isSmallScreen
          ? classes.workProjectDemo__container_R
          : classes.workProjectDemo__container
      }
      elevation={7}>
      <Video imagePath={imagePath} videoPath={videoPath} />
    </Paper>
  )
  return (
    <section id='project__ProjectDemo'>
      <ThemedTooltip
        disableFocusListener
        title={`${methodOfInteraction} for more details`}
        placement='top'
        aria-label='more details'>
        {isPhoneScreenDown ? demoWithoutLink : demoWithLink}
      </ThemedTooltip>
    </section>
  )
}
