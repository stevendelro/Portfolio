import Container from '@material-ui/core/Container'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ReactMarkdown from '../Markdown'

function PostBody({ content }) {
  return (
    <Container maxWidth='md'>
      <ReactMarkdown children={documentToReactComponents(content)} />
    </Container>
  )
}

export default PostBody
