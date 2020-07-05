import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ImageSide from './ImageSide'
import TextSide from './TextSide'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(5, 0)
  },
}))

export default function HorizontalPreview({
  title,
  coverImage,
  date,
  excerpt,
  readingTime,
  slug,
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('xs'))
  let adjustedForSmallScreens

  if (isTinyScreen) {
    adjustedForSmallScreens = (
      <>
        <ImageSide coverImage={coverImage} title={title} slug={slug} />
        <TextSide
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
        <TextSide
          title={title}
          date={date}
          slug={slug}
          excerpt={excerpt}
          readingTime={readingTime}
        />
        <ImageSide coverImage={coverImage} title={title} slug={slug} />
      </>
    )
  }
  return (
    <>
      <Divider className={classes.divider} />
      <Grid
        container
        className={classes.root}
        direction='row'
        justify='space-between'
        alignItems='flex-start'>
        {adjustedForSmallScreens}
      </Grid>
    </>
  )
}
