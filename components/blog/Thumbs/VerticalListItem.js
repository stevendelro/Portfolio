import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import CustomDate from '../../CustomDate'
import MuiLink from '../../MuiLink'

const useStyles = makeStyles(theme => ({
  vListItem__imageContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  vListItem__imageContainer_image: {
    cursor: 'pointer',
    paddingTop: '56.25%', // 16:9
    borderRadius: 5,
  },
  vListItem__textContainer: {
    flexGrow: 1,
    padding: theme.spacing(3, 1, 1, 1),
  },
  vListItem__textContainer_title: {
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
  vListItem__textContainer_date: {
    marginBottom: theme.spacing(3),
  },
  vListItem__textContainer_readingTime: {
    lineHeight: '.1rem',
  },
}))
export default function VerticalListItem({
  title,
  coverImage,
  date,
  excerpt,
  readingTime,
  slug,
}) {
  const classes = useStyles()
  return (
    <article id='PostDetailsPage__V.Preview'>
      {/* IMAGE */}
      <Paper className={classes.vListItem__imageContainer} elevation={3}>
        <CardMedia
          className={classes.vListItem__imageContainer_image}
          image={coverImage}
          title={title}
        />
      </Paper>
      <Box className={classes.vListItem__textContainer}>
        {/* TITLE */}
        <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
          <Typography
            className={classes.vListItem__textContainer_title}
            align='left'
            component='h2'
            variant='h4'>
            {title}
          </Typography>
        </MuiLink>

        {/* DATE AND READING TIME */}
        <Typography
          className={classes.vListItem__textContainer_date}
          variant='overline'
          align='left'
          display='block'>
          <CustomDate dateString={date} />
          <Typography
            className={classes.vListItem__textContainer_readingTime}
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
