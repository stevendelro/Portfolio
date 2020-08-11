import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Video from '../../Video'

const useStyles = makeStyles(theme => ({
  ProjectDemo__ROOT: {
    margin: theme.spacing(0, 4, 0),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(0, 0, 0, 3),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
}))

export default function ProjectDemo({ imagePath, videoPath }) {
  const classes = useStyles()
  return (
    <section id='projectDetailsPage__image'>
      <Paper className={classes.ProjectDemo__ROOT} elevation={7}>
        <Video imagePath={imagePath} videoPath={videoPath} />
      </Paper>
    </section>
  )
}
