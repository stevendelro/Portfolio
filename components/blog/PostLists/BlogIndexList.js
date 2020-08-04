import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import HorizontalListItem from './BlogIndexListItem'

const useStyles = makeStyles(theme => ({
  blogIndexList__ROOT: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  blogIndexList__container: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
    },
  },
  blogIndexList__listItemContainer: {
    flexGrow: 1,
  },
}))

export default function BlogIndexList({ posts }) {
  const classes = useStyles()
  return (
    <section className={classes.blogIndexList__ROOT} id='blogIndexList'>
      <Container className={classes.blogIndexList__container} maxWidth='md'>
        <Grid container>
          {posts.map(post => {
            return (
              <Grid
                item
                key={post.id}
                className={classes.blogIndexList__listItemContainer}>
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
