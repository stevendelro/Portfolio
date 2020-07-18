import { makeStyles } from '@material-ui/core/styles'
import Markdown from './Markdown'

const useStyles = makeStyles(theme => ({
  rootPostBody: {
    marginBottom: theme.spacing(10),
  },
}))

export default function PostBody({ content }) {
  const classes = useStyles()
  return (
    <main id='SlugPage__Body' className={classes.rootPostBody}>
      <Markdown className={classes.root}>
        {content}
      </Markdown>
    </main>
  )
}
