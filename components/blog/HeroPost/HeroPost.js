import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import DateReadingTime from './DateReadingTime'
import Excerpt from './Excerpt'
import Image from './Image'

const useStyles = makeStyles(theme => ({
  rootHeroPost: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  allText: {
    marginBottom: theme.spacing(2),
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
  const isLargeScreenUp = useMediaQuery(theme.breakpoints.up('lg'))
  let composableTextArea

  /*
  Larger screens will display content based on what side you prefer
  to have the blog post title (via the "titlePosition" prop)
*/
  if (titlePosition === 'right' && !isTinyScreen) {
    composableTextArea = (
      <>
        <Excerpt titlePosition={titlePosition} excerpt={excerpt} />
        <DateReadingTime
          slug={slug}
          title={title}
          date={date}
          author={author}
          readingTime={readingTime}
        />
      </>
    )
  } else if (titlePosition === 'left' && !isTinyScreen) {
    composableTextArea = (
      <>
        <DateReadingTime
          slug={slug}
          title={title}
          date={date}
          author={author}
          readingTime={readingTime}
        />
        <Excerpt titlePosition={titlePosition} excerpt={excerpt} />
      </>
    )

    /*
  Smaller screens will display the title above the excerpt,
  independent of whatever side was initially chosen.
*/
  } else if (titlePosition === 'right' && isTinyScreen) {
    composableTextArea = (
      <>
        <DateReadingTime
          slug={slug}
          title={title}
          date={date}
          author={author}
          readingTime={readingTime}
        />
        <Excerpt titlePosition={titlePosition} excerpt={excerpt} />
      </>
    )
  } else if (titlePosition === 'left' && isTinyScreen) {
    composableTextArea = (
      <>
        <Excerpt titlePosition={titlePosition} excerpt={excerpt} />
        <DateReadingTime
          slug={slug}
          title={title}
          date={date}
          author={author}
          readingTime={readingTime}
        />
      </>
    )
  }

  return (
    <article id='HeroPost' className={classes.rootHeroPost}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={10} lg={8} xl={6}>
          <Image slug={slug} coverImage={coverImage} title={title} />
          <section>
            <Grid
              container
              id='HeroPost__TextArea'
              className={classes.allText}
              direction='row'
              justify='space-between'
              alignItems={isLargeScreenUp ? 'center' : 'flex-start'}>
              {composableTextArea}
            </Grid>
          </section>
        </Grid>
      </Grid>
    </article>
  )
}
