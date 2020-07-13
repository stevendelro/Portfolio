import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MuiLink from '../../MuiLink'
import CustomDate from '../../CustomDate'

const useStyles = makeStyles(theme => ({

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
  image: {
    cursor: 'pointer',
    paddingTop: '56.25%', // 16:9
    borderRadius: 5,
  },
  title: {
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
  text: {
    flexGrow: 1,
    padding: theme.spacing(3, 1, 1, 1),
  },
  date: {
    marginBottom: theme.spacing(3),
  },
  readingTime: {
    lineHeight: '.1rem',
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
    <article id='SlugPage__V.Preview'>
      {/* IMAGE */}
      <Paper className={classes.card} elevation={3}>
        <CardMedia
          className={classes.image}
          image={coverImage}
          title={title}></CardMedia>
      </Paper>
      <Box className={classes.text}>
        {/* TITLE */}
        <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
          <Typography
            className={classes.title}
            align='left'
            component='h2'
            variant='h4'>
            {title}
          </Typography>
        </MuiLink>

        {/* DATE AND READING TIME */}
        <Typography
          className={classes.date}
          variant='overline'
          align='left'
          display='block'>
          <CustomDate dateString={date} />
          <Typography
            className={classes.readingTime}
            align='left'
            variant='overline'
            color='textSecondary'
            display='inline'
            gutterBottom>
            {' '}
            • {readingTime}
          </Typography>
        </Typography>

        {/* EXCERPT */}
        <Typography variant='body2' color='textSecondary' align='left'>
          {excerpt}
        </Typography>
      </Box>
    </article>
  )
}
