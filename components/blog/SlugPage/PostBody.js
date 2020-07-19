import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MarkdownRenderer from './MarkdownRenderer'

const useStyles = makeStyles(theme => ({
  rootPostBody: {
    marginBottom: theme.spacing(10),
  },
}))

export default function PostBody({ content }) {
  const classes = useStyles()
  return (
    <main id='SlugPage__Body' className={classes.rootPostBody}>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </main>
  )
}
