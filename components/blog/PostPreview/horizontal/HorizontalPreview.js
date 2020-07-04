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
}))

export default function MediaLeft({
  title,
  coverImage,
  date,
  excerpt,
  author,
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
          author={author}
          date={date}
          slug={slug}
          excerpt={excerpt}
        />
      </>
    )
  }
  if (!isTinyScreen) {
    adjustedForSmallScreens = (
      <>
        <TextSide
          title={title}
          author={author}
          date={date}
          slug={slug}
          excerpt={excerpt}
        />
        <ImageSide coverImage={coverImage} title={title} slug={slug} />
      </>
    )
  }
  return (
    <>
      <Divider style={{ margin: '2rem 0' }} />
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
