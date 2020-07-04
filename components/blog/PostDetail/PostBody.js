import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import MarkdownElement from '../../Markdown'

function PostBody({ content }) {
  return <MarkdownElement children={documentToReactComponents(content)} />
}

export default PostBody
