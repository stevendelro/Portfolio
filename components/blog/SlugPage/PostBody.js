import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import MarkdownElement from '../../Markdown'

export default function PostBody({ content }) {
  return (
    <main id='SlugPage__Body'>
      <MarkdownElement
        style={{
          fontFamily: 'Roboto Slab',
          fontWeight: 200,
          fontSize: '1.2rem',
        }}
        children={documentToReactComponents(content)}
      />
    </main>
  )
}
