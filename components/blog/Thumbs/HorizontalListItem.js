import { makeStyles, useTheme } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import CustomDate from '../../CustomDate'
import MuiLink from '../../MuiLink'

const useStyles = makeStyles(theme => ({
  hListItem__mainContainer: {
    width: '100%',
    minHeight: 280,
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },
  // >>>>>TEXT AREA<<<<<<
  hListItem__textContainer: {
    textAlign: 'center',
    padding: theme.spacing(0, 2, 2, 2),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(10),
      padding: theme.spacing(3),
    },
  },
  hListItem__textContainer_excerpt: {
    textAlign: 'center',
  },
  hListItem__textContainer_title: {
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
  // >>>>>IMAGE AREA<<<<<
  hListItem__imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(1),

    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
      minWidth: '100%',
    },
  },
  hListItem__imageContainer_image: {
    borderRadius: 5,
    cursor: 'pointer',
    [theme.breakpoints.up('xs')]: {
      minWidth: '58.33%', // 7 (item size) ÷ by 12 (grid size) = .58333 max
      minHeight: 300,
    },
  },
}))

export default function HorizontalListItem({
  title,
  coverImage,
  date,
  excerpt,
  readingTime,
  slug,
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isTinyScreenDown = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <article>
      <Grid
        container
        className={classes.hListItem__mainContainer}
        direction={isTinyScreenDown ? 'column-reverse' : 'row'}
        justify='center'
        alignItems={isTinyScreenDown ? 'center' : 'flex-start'}>
        {/* >>>> TEXT SIDE <<<< */}
        <Grid item xs={12} sm={5} className={classes.hListItem__textContainer}>
          {/* TITLE */}
          <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
            <Typography
              className={classes.hListItem__textContainer_title}
              component='h2'
              variant='h4'>
              {title}
            </Typography>
          </MuiLink>
          {/* DATE • READING TIME */}
          <Typography variant='overline' display='block'>
            <CustomDate dateString={date} />
            <Typography
              variant='overline'
              color='textSecondary'
              display='inline'
              gutterBottom>
              {' '}
              • {readingTime}
            </Typography>
          </Typography>
          {/* EXCERPT */}
          <Typography
            className={classes.hListItem__textContainer_excerpt}
            variant='body2'
            color='textSecondary'
            align='left'>
            {excerpt}
          </Typography>
        </Grid>
        {/* >>>> IMAGE SIDE <<<<*/}
        <Grid item xs={12} sm={7} className={classes.hListItem__imageContainer}>
          <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' naked>
            <Paper elevation={3}>
              <CardMedia
                className={classes.hListItem__imageContainer_image}
                image={coverImage}
                title={title}
              />
            </Paper>
          </MuiLink>
        </Grid>
      </Grid>
    </article>
  )
}
