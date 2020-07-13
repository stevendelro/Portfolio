import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import MuiLink from '../../MuiLink'
import CustomDate from '../../CustomDate'

const useStyles = makeStyles(theme => ({
  vPreview__imageContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  vPreview__imageContainer_image: {
    cursor: 'pointer',
    paddingTop: '56.25%', // 16:9
    borderRadius: 5,
  },
  vPreview__textContainer: {
    flexGrow: 1,
    padding: theme.spacing(3, 1, 1, 1),
  },
  vPreview__textContainer_title: {
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
  vPreview__textContainer_date: {
    marginBottom: theme.spacing(3),
  },
  vPreview__textContainer_readingTime: {
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
  return (
    <article id='SlugPage__V.Preview'>
      {/* IMAGE */}
      <Paper className={classes.vPreview__imageContainer} elevation={3}>
        <CardMedia
          className={classes.vPreview__imageContainer_image}
          image={coverImage}
          title={title}
        />
      </Paper>
      <Box className={classes.vPreview__textContainer}>
        {/* TITLE */}
        <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
          <Typography
            className={classes.vPreview__textContainer_title}
            align='left'
            component='h2'
            variant='h4'>
            {title}
          </Typography>
        </MuiLink>

        {/* DATE AND READING TIME */}
        <Typography
          className={classes.vPreview__textContainer_date}
          variant='overline'
          align='left'
          display='block'>
          <CustomDate dateString={date} />
          <Typography
            className={classes.vPreview__textContainer_readingTime}
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
