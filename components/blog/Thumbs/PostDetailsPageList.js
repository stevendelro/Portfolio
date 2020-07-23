import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import VerticalListItem from './VerticalListItem'

const useStyles = makeStyles(theme => ({
  PostDetailsPageList__Container: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  PostDetailsPageList__GridContainer: {
    paddingBottom: theme.spacing(4),
  },
}))

export default function PostDetailsPageList({ posts }) {
  const classes = useStyles()
  return (
    <article id='PostDetailsPageList'>
      <Box className={classes.PostDetailsPageList__Container}>
        <Grid
          container
          className={classes.PostDetailsPageList__GridContainer}
          spacing={5}>
          {posts.map(post => (
            <Grid item key={post.id} xs={12} sm={6}>
              <VerticalListItem
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
