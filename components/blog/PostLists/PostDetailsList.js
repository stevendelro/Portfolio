import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import PostDetailsListItem from './PostDetailsListItem'

const useStyles = makeStyles(theme => ({
  postDetailsList__ROOT: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  postDetailsList__gridContainer: {
    paddingBottom: theme.spacing(4),
  },
}))

export default function PostDetailsPageList({ posts }) {
  const classes = useStyles()
  return (
    <article id='postDetailsList'>
      <Box className={classes.postDetailsList__ROOT}>
        <Grid
          container
          className={classes.postDetailsList__gridContainer}
          spacing={5}>
          {posts.map(post => (
            <Grid item key={post.id} xs={12} sm={6}>
              <PostDetailsListItem
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage.url}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
                readingTime={post.stats.text}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </article>
  )
}
