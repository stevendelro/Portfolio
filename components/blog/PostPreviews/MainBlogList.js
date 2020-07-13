import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import HorizontalPreview from './HorizontalPreview'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  blogIndexList__Container: {

    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  blogIndexList__GridContainer: {
    // maxWidth: 600,
  },
}))

export default function MainBlogList({ posts }) {
  const classes = useStyles()
  return (
    <section id='MainBlogList'>
      <Box className={classes.blogIndexList__Container}>
        <Grid container className={classes.blogIndexList__GridContainer} >
          {posts.map(post => {
            return (
              <Grid item>
                <HorizontalPreview
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
      </Box>
    </section>
  )
}
