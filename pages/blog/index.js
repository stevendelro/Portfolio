import { getAllPostsForHome } from '../../contentful-api/api'

export default function BlogIndex() {
  return (
    <div>
      BlogIndex.js
    </div>
  )
}


export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, allPosts },
  }
}
