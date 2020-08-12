import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import CustomDate from '../../CustomDate'
import MuiLink from '../../MuiLink'

const useStyles = makeStyles(theme => ({
  /************************************
   *********** IMAGE SIDE *************
   ************************************/
  postDetailsListItem__image_container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  postDetailsListItem__image: {
    cursor: 'pointer',
    paddingTop: '56.25%', // 16:9
    borderRadius: 5,
  },
  /************************************
   *********** TEXT SIDE **************
   ************************************/
  postDetailsListItem__text_container: {
    flexGrow: 1,
    padding: theme.spacing(3, 1, 1, 1),
  },
  postDetailsListItem__text_title: {
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
  postDetailsListItem__text_date: {
    marginBottom: theme.spacing(3),
  },
  postDetailsListItem__text_readingTime: {
    lineHeight: '.1rem',
  },
}))
export default function PostDetailListItem({
  title,
  coverImage,
  date,
  excerpt,
  readingTime,
  slug,
}) {
  const classes = useStyles()
  return (
    <article id='postDetailsListItem'>
      {/************************************
       *********** IMAGE SIDE *************
       ************************************/}
      <Paper
        className={classes.postDetailsListItem__image_container}
        elevation={3}>
        <MuiLink
          as={`/blog/${slug}`}
          href='/blog/[postDetails]'
          underline='none'>
          <CardMedia
            className={classes.postDetailsListItem__image}
            image={coverImage}
            title={title}
          />
        </MuiLink>
      </Paper>
      {/************************************
       *********** TEXT SIDE **************
       ************************************/}
      <Box
        id='postDetailsListItem__text'
        className={classes.postDetailsListItem__text_container}>
        {/********** TITLE ***********/}
        <MuiLink
          as={`/blog/${slug}`}
          href='/blog/[postDetails]'
          underline='none'>
          <Typography
            className={classes.postDetailsListItem__text_title}
            align='left'
            component='h2'
            variant='h4'>
            {title}
          </Typography>
        </MuiLink>

        {/******  DATE • READING TIME *******/}
        <Typography
          className={classes.postDetailsListItem__text_date}
          variant='overline'
          align='left'
          display='block'>
          <CustomDate dateString={date} />
          <Typography
            className={classes.postDetailsListItem__text_readingTime}
            align='left'
            variant='overline'
            color='textSecondary'
            display='inline'
            gutterBottom>
            {' '}
            • {readingTime}
          </Typography>
        </Typography>

        {/************ EXCERPT ************/}
        <Typography variant='body2' color='textSecondary' align='left'>
          {excerpt}
        </Typography>
      </Box>
    </article>
  )
}
