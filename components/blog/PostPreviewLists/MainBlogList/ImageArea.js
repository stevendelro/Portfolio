import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  image: {
    cursor: 'pointer',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: 5,
      height: 265,
    },
    [theme.breakpoints.up('md')]: {
      height: 250,
    },
  },

}))

export default function ImageArea({coverImage, title, slug}) {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={7}>
      <Link as={`/blog/${slug}`} href='/blog/[slug]'>
        <Paper elevation={3}>
          <CardMedia
            className={classes.image}
            image={coverImage}
            title={title}
          />
        </Paper>
      </Link>
    </Grid>
  )
}

