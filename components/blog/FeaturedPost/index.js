import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import DateReadingTime from './TitleDateTime'
import Excerpt from './Excerpt'
import Image from './Image'

const useStyles = makeStyles(theme => ({
  featuredPost__ROOT: {
    marginBottom: theme.spacing(10),
  },
  featuredPost__image: {
    padding: theme.spacing(0, 7),
  },
  featuredPost__text: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 1rem',
    },
  },
}))

export default function FeaturedPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
  titlePosition = 'left', // if not declared, default to left.
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('xs'))
  const isSmallScreen = useMediaQuery(theme.breakpoints.only('sm'))
  const isSmallScreenUp = useMediaQuery(theme.breakpoints.up('sm'))
  const isLargeScreenUp = useMediaQuery(theme.breakpoints.up('lg'))
  let composableTextArea

  // Decalred to pass down properties before arranging.
  const PostExcerpt = (
    <Excerpt titlePosition={titlePosition} excerpt={excerpt} />
  )
  const TimeStamp = (
    <DateReadingTime
      slug={slug}
      title={title}
      date={date}
      author={author}
      readingTime={readingTime}
      titlePosition={titlePosition}
    />
  )
  // Arrange text area based on screen size and orientation
  switch (titlePosition.toLowerCase()) {
    case 'right': {
      // prettier-ignore
      isTinyScreen
        ? composableTextArea = <>{TimeStamp}{PostExcerpt}</>
        : composableTextArea = <>{PostExcerpt}{TimeStamp}</>
      break
    }
    case 'left': {
      // prettier-ignore
      isTinyScreen
        ? composableTextArea = <>{PostExcerpt}{TimeStamp}</>
        : composableTextArea = <>{TimeStamp}{PostExcerpt}</>
      break
    }
    default: {
      console.error(`
      The titlePosition property within <HeroPost /> MUST be defined as 'left' or 'right':

      '${titlePosition}' is not an accepted value.
      `)
      break
    }
  }

  return (
    <article id='featuredPost' className={classes.featuredPost__ROOT}>
      {isSmallScreen || isTinyScreen ? (
        <Image slug={slug} coverImage={coverImage} title={title} />
      ) : null}
      <Container className={classes.featuredPost__image} maxWidth='lg'>
        {isSmallScreenUp && !isSmallScreen ? (
          <Image slug={slug} coverImage={coverImage} title={title} />
        ) : null}
        <section>
          <Grid
            container
            className={classes.featuredPost__text}
            direction='row'
            justify='space-between'
            alignItems={isLargeScreenUp ? 'center' : 'flex-start'}>
            {composableTextArea}
          </Grid>
        </section>
      </Container>
    </article>
  )
}
