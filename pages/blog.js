import { getPosts } from '../pages/api/posts'

const Blog = props => {
  const { posts } = props
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps(ctx) {
  
  const posts = await getPosts()
  console.log('posts', posts)
  return { props: { posts } }
}

export default Blog
