import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ImageArea from './ImageArea'
import TextArea from './TextArea'

const useStyles = makeStyles(theme => ({
  rootHorizontalPreview: {
    [theme.breakpoints.up('sm')]: {
      height: 350,
    },
    overflow: 'hidden',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(5, 0, 5, 0),
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
}))

export default function HorizontalPreview({
  title,
  coverImage,
  date,
  excerpt,
  readingTime,
  slug,
  index
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('xs'))
  let adjustedForSmallScreens

  if (isTinyScreen) {
    adjustedForSmallScreens = (
      <>
        <ImageArea coverImage={coverImage} title={title} slug={slug} />
        <TextArea
          title={title}
          date={date}
          slug={slug}
          excerpt={excerpt}
          readingTime={readingTime}
        />
      </>
    )
  }
  if (!isTinyScreen) {
    adjustedForSmallScreens = (
      <>
        <TextArea
          title={title}
          date={date}
          slug={slug}
          excerpt={excerpt}
          readingTime={readingTime}
        />
        <ImageArea coverImage={coverImage} title={title} slug={slug} />
      </>
    )
  }
  return (
    <article id='MainBlogList__H.Preview' className={classes.rootHorizontalPreview}>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='flex-start'>
        {adjustedForSmallScreens}
      </Grid>
    </article>
  )
}
