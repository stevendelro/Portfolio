import Container from '@material-ui/core/Container'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import MarkdownElement from '../Markdown'

function PostBody({ content }) {
  return (
    <Container maxWidth='md'>
      <MarkdownElement children={documentToReactComponents(content)} />
    </Container>
  )
}

export default PostBody
