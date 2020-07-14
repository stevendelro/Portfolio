import Link from 'next/link'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  image: {
    flexGrow: 1,
    paddingTop: '1rem',
    marginBottom: '3rem',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: 400,
    },
    [theme.breakpoints.up('sm')]: {
      height: 500,
      borderRadius: 5,
    },
  },
}))

export default function Image({ slug, coverImage, title }) {
  const classes = useStyles()
  return (
    <section id='HeroPost__ImageArea'>
      <Link as={`/blog/${slug}`} href='/blog/[slug]'>
        <Paper elevation={5}>
          <CardMedia
            className={classes.image}
            image={coverImage}
            title={title}
          />
        </Paper>
      </Link>
    </section>
  )
}
