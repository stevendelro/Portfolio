import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import MuiLink from '../MuiLink'
import Video from '../Video'

const useStyles = makeStyles(theme => ({
  ProjectDemo__container: {
    margin: theme.spacing(0, 4),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 3, 0, 0),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  // Right Side Image Styles
  ProjectDemo__container_R: {
    margin: theme.spacing(0, 4, 0),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 0, 0, 3),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
}))

export default function ProjectDemo({
  imageRight,
  isSmallScreen,
  projectInfo,
}) {
  const classes = useStyles()
  const { videoPath, imagePath, name } = projectInfo
  return (
    <section id='project__ProjectDemo'>
      <MuiLink
        as={`/work/${name.toLowerCase()}`}
        href='/work/[projectDetails]'
        naked>
        <Paper
          className={
            imageRight && !isSmallScreen
              ? classes.ProjectDemo__container_R
              : classes.ProjectDemo__container
          }
          elevation={7}>
          <Video imagePath={imagePath} videoPath={videoPath} />
        </Paper>
      </MuiLink>
    </section>
  )
}
