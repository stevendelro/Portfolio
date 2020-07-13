import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CustomDate from '../../CustomDate'

const useStyles = makeStyles(theme => ({
  hPreview__mainContainer: {
    width: '100%',
    minHeight: 280,
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
    },
  },
  hPreview__imageContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      maxWidth: '92vw', // 11 (item size) ÷ by 12 (grid size) = .91666 max
    },
  },
  hPreview__textContainer: {
    padding: theme.spacing(0, 2, 2, 2),
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(10),
    },
  },
  hPreview__imageContainer_image: {
    cursor: 'pointer',
    paddingTop: '56.25%', // 16:9
    borderRadius: 5,
    [theme.breakpoints.up('xs')]: {
      maxWidth: '58.33vw', // 7 (item size) ÷ by 12 (grid size) = .58333 max
      minWidth: '54vw', // a little less than 7÷12 to allow room for spacing.
      minHeight: 300,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '92vw', // 11 (item size) ÷ by 12 (grid size) = .91666 max
    },
  },
  hPreview__textContainer_excerpt: {
    textAlign: 'center',
  },
  hPreview__textContainer_date: {},
  hPreview__textContainer_readingTime: {},
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

  const isTinyScreenDown = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <article>
      <Grid
        container
        className={classes.hPreview__mainContainer}
        direction={isTinyScreenDown ? 'column-reverse' : 'row'}
        justify='center'
        alignItems='flex-start'>
        {/* >>>> TEXT SIDE <<<< */}
        <Grid item xs={12} sm={5} className={classes.hPreview__textContainer}>
          {/* TITLE */}
          <Typography
            className={classes.hPreview__textContainer_title}
            component='h2'
            variant='h4'>
            {title}
          </Typography>
          {/* DATE • READING TIME */}
          <Typography
            className={classes.hPreview__textContainer_date}
            variant='overline'
            display='block'>
            <CustomDate dateString={date} />
            <Typography
              className={classes.hPreview__textContainer_readingTime}
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
            className={classes.hPreview__textContainer_excerpt}
            variant='body2'
            color='textSecondary'
            align='left'>
            {excerpt}
          </Typography>
        </Grid>

        {/* >>>> IMAGE SIDE <<<<*/}
        <Grid item xs={12} sm={7} className={classes.hPreview__imageContainer}>
          <Paper>
            <CardMedia
              className={classes.hPreview__imageContainer_image}
              image={coverImage}
              title={title}
            />
          </Paper>
        </Grid>
      </Grid>
    </article>
  )
}
