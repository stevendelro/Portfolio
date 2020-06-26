import moment from 'moment'
import Grid from '@material-ui/core/Grid'
import { getPosts } from '../api/blog'
import Post from '../../components/blog/Post'

const Posts = props => {
  const { posts } = props

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={3}>
      {posts.map(post => (
        <Post
          key={post.uuid}
          title={post.title}
          slug={post.slug}
          image={post.feature_image}
          excerpt={post.excerpt}
          customExcerpt={post.custom_excerpt}
          html={post.html}
          readingTime={post.reading_time}
          created={{
            raw: post.created_at,
            formatted: moment(post.created_at).format('h:mma - M/DD/YY'),
          }}
          updated={{
            far: post.updated_at,
            formatted: moment(post.updated_at).format('h:mma - M/DD/YY'),
          }}
          published={{
            raw: post.published_at,
            formatted: moment(post.published_at).format('h:mma - M/DD/YY'),
          }}
        />
      ))}
    </Grid>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}

export default Posts
