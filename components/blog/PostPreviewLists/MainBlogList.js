import Grid from '@material-ui/core/Grid'
import HorizontalPreview from './MainBlogList/HorizontalPreview'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  rootMainBlogList: {
    paddingTop: theme.spacing(3),
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
}))

export default function MainBlogList({ posts }) {
  const classes = useStyles()
  return (
    <section id='MainBlogList' className={classes.rootMainBlogList}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={10} lg={8} xl={6}>
          {posts.map(post => {
            return (
              <HorizontalPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage.url}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
                readingTime={post.stats.text}
              />
            )
          })}
        </Grid>
      </Grid>
    </section>
  )
}
