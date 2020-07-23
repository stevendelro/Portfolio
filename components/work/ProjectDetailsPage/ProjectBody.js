import { makeStyles } from '@material-ui/core/styles'

import MarkdownRenderer from '../../MarkdownRenderer'

const useStyles = makeStyles(theme => ({
  rootPostBody: {
    marginBottom: theme.spacing(10),
  },
}))

export default function ProjectBody({ content }) {
  const classes = useStyles()
  return (
    <main id='ProjectDetailsPage__Body' className={classes.rootPostBody}>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </main>
  )
}
