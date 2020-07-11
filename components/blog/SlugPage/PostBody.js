import { makeStyles } from '@material-ui/core/styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import MarkdownElement from '../../Markdown'

const useStyles = makeStyles(theme => ({
  rootPostBody: {
    marginBottom: theme.spacing(10),
  },
  markdownElement: {
    fontFamily: 'Roboto Slab',
    fontWeight: 200,
    fontSize: '1.2rem',
  },
}))

export default function PostBody({ content }) {
  const classes = useStyles()
  return (
    <main id='SlugPage__Body' className={classes.rootPostBody}>
      <MarkdownElement
        className={classes.markdownElement}
        children={documentToReactComponents(content)}
      />
    </main>
  )
}
