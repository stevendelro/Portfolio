import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import VerticalPreview from './PostDetailList/VerticalPreview'

const useStyles = makeStyles(theme => ({
  topGrid: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
  },
}))

export default function SlugPageList({ posts }) {
  const classes = useStyles()
  return (
    <article id='SlugPage__FeaturedPosts'>
      <Grid
        className={classes.topGrid}
        container
        spacing={3}
        direction='row'
        justify='center'
        alignItems='flex-start'>
        {posts.map(post => {
          return (
            <Grid item key={post.id} xs={12} sm={6}>
              <VerticalPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage.url}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
                readingTime={post.stats.text}
              />
            </Grid>
          )
        })}
      </Grid>
    </article>
  )
}
