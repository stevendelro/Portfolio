import { makeStyles, useTheme } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Link from 'next/link'
import Paper from '@material-ui/core/Paper'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  heroPost__image: {
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

export default function HeroPostImage({ slug, coverImage, title }) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreenDown = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <section>
      <Link as={`/blog/${slug}`} href='/blog/[postDetails]'>
        <Paper elevation={isSmallScreenDown ? 0 : 5}>
          <CardMedia
            className={classes.heroPost__image}
            image={coverImage}
            title={title}
          />
        </Paper>
      </Link>
    </section>
  )
}
