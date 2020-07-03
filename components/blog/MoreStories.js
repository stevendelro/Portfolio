import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PostPreview from './PostPreview'

function MoreStories({ posts }) {
  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      <Grid item xs={12} sm={11} lg={10} xl={8}>

        {posts.map(post => {
          return (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage.url}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          )
        })}
      </Grid>
    </Grid>
  )
}

export default MoreStories
