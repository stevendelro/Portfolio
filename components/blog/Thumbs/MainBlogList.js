import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import HorizontalListItem from './HorizontalListItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  blogIndexList__Section: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  blogIndexList__Container: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1)
    }
  },
  blogIndexList__GridItem: {
    flexGrow: 1
  }
}))

export default function MainBlogList({ posts }) {
  const classes = useStyles()
  return (
    <section className={classes.blogIndexList__Section} id='MainBlogList'>
      <Container className={classes.blogIndexList__Container} maxWidth='md'>
        <Grid container  >
          {posts.map(post => {
            return (
              <Grid item key={post.id} className={classes.blogIndexList__GridItem}>
                <HorizontalListItem
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
      </Container>
    </section>
  )
}

