import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Link from 'next/link'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  Image__root: {
    flexGrow: 1,
    paddingTop: '1rem',
    marginBottom: '3rem',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: 400,
    },
    [theme.breakpoints.up('md')]: {
      height: 500,
      borderRadius: 5,
    },
  },
}))

export default function Image({ slug, coverImage, title }) {
  const classes = useStyles()
  return (
    <section>
      <Link as={`/blog/${slug}`} href='/blog/[slug]'>
        <Paper elevation={5}>
          <CardMedia
            className={classes.Image__root}
            image={coverImage}
            title={title}
          />
        </Paper>
      </Link>
    </section>
  )
}
