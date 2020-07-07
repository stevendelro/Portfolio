import Divider from '@material-ui/core/Divider'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ImageArea from './ImageArea'
import TextArea from './TextArea'

const useStyles = makeStyles(theme => ({
  tinyScreenDivider: {
    margin: theme.spacing(5, 0),
  },
}))
export default function VerticalPreview({
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

  return (
    <>
      <ImageArea coverImage={coverImage} title={title} slug={slug} />
      <TextArea
        date={date}
        readingTime={readingTime}
        excerpt={excerpt}
        title={title}
        slug={slug}
      />
      {isTinyScreen ? <Divider className={classes.tinyScreenDivider} /> : null}
    </>
  )
}
