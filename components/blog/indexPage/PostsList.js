import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import PostsListItem from './PostsListItem'

const useStyles = makeStyles(theme => ({
  postsList__ROOT: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  postsList__container: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
    },
  },
  postsList__listItemContainer: {
    flexGrow: 1,
  },
}))

export default function PostsList({ posts }) {
  const classes = useStyles()
  return (
    <section className={classes.postsList__ROOT} id='postsList'>
      <Container className={classes.postsList__container} maxWidth='md'>
        <Grid container>
          {posts.map(post => {
            return (
              <Grid
                item
                key={post.id}
                className={classes.postsList__listItemContainer}>
                <PostsListItem
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
