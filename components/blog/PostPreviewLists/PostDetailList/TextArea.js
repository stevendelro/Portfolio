import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CustomDate from '../../../CustomDate'
import MuiLink from '../../../MuiLink'

const useStyles = makeStyles(theme => ({
  allText: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: theme.spacing(1),
    },
  },
  links: {
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
  dateTimeStamp: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '.8rem',
    },
  },
  date: {
    marginBottom: theme.spacing(3),
  },
  readingTime: {
    lineHeight: '.1rem',
  },
}))


export default function TextArea({ date, readingTime, excerpt, slug, title }) {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.allText}
      direction='column'
      justify='flex-start'
      alignItems='flex-start'>
      <Grid item>
        <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
          <Typography className={classes.links} align='left' component='h2' variant='h4'>
            {title}
          </Typography>
        </MuiLink>
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
      </Grid>

      <Grid className={classes.dateTimeStamp} item>
        <Typography variant='body2' color='textSecondary' align='left'>
          {excerpt}
        </Typography>
      </Grid>
    </Grid>
  )
}
