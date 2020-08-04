import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Link from 'next/link'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  FeaturedPost_Image__ROOT: {
    flexGrow: 1,
    paddingTop: '1rem',
    marginBottom: '3rem',
    cursor: 'pointer',
    borderRadius: 5,
    [theme.breakpoints.up('lg')]: {
      height: 700,
    },
    [theme.breakpoints.only('md')]: {
      height: 600,
    },
    [theme.breakpoints.only('sm')]: {
      height: 500,
      borderRadius: 0,
    },
    [theme.breakpoints.down('xs')]: {
      height: 400,
      borderRadius: 0,
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
            className={classes.FeaturedPost_Image__ROOT}
            image={coverImage}
            title={title}
          />
        </Paper>
      </Link>
    </section>
  )
}
