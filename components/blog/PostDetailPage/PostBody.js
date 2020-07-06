import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import MarkdownElement from '../../Markdown'


function PostBody({ content }) {
  return (
    <MarkdownElement
      style={{ fontFamily: 'Roboto Slab', fontWeight: 200, fontSize: '1.2rem' }}
      children={documentToReactComponents(content)}
    />
  )
}

export default PostBody
