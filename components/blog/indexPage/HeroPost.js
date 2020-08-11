import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import HeroPostExcerpt from './HeroPostExcerpt'
import HeroPostImage from './HeroPostImage'
import HeroPostTitleBox from './HeroPostTitleBox'

const useStyles = makeStyles(theme => ({
  heroPost__ROOT: {
    marginBottom: theme.spacing(10),
  },
  heroPost__image: {
    padding: theme.spacing(0, 7),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
    },
  },
  heroPost__text: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 1rem',
    },
  },
}))

export default function HeroPost({
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
    <HeroPostExcerpt titlePosition={titlePosition} excerpt={excerpt} />
  )
  const TitleBox = (
    <HeroPostTitleBox
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
        ? composableTextArea = <>{TitleBox}{PostExcerpt}</>
        : composableTextArea = <>{PostExcerpt}{TitleBox}</>
      break
    }
    case 'left': {
      // prettier-ignore
      isTinyScreen
        ? composableTextArea = <>{PostExcerpt}{TitleBox}</>
        : composableTextArea = <>{TitleBox}{PostExcerpt}</>
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
    <article id='heroPost' className={classes.heroPost__ROOT}>
      {isSmallScreen || isTinyScreen ? (
        <HeroPostImage slug={slug} coverImage={coverImage} title={title} />
      ) : null}
      <Container className={classes.heroPost__image} maxWidth='lg'>
        {isSmallScreenUp && !isSmallScreen ? (
          <HeroPostImage slug={slug} coverImage={coverImage} title={title} />
        ) : null}
        <section>
          <Grid
            container
            className={classes.heroPost__text}
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
