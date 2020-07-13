import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  image: {
    cursor: 'pointer',
    width: '100%',
    height: 300,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 5,
    },
  },
}))

export default function ImageArea({ coverImage, title, slug }) {
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
