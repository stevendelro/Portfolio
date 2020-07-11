import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import VerticalPreview from './VerticalPreview'

const useStyles = makeStyles(theme => ({
  vertPreviewGrid: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
  },
}))

export default function SlugPageList({ posts }) {
  const classes = useStyles()
  return (
    <article id='SlugPage__FeaturedPosts'>
      <Box className={classes.vertPreviewGrid} >
        <Grid container spacing={5}>
          {posts.map(post => (
            <Grid item key={post.id} xs={12} sm={6} >
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
          ))}
        </Grid>
      </Box>
    </article>
  )
}
