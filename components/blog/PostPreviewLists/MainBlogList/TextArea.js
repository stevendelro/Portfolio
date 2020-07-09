import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CustomDate from '../../../CustomDate'
import MuiLink from '../../../MuiLink'

const useStyles = makeStyles(theme => ({
  allText: {
    padding: theme.spacing(0, 1),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(5, 5),
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(3),
    },
  },
  dateReadingTime: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '.65rem',
    },
  },
  readingTime: {
    textAlign: 'center',
    lineHeight: '.1rem',
  },
}))

export default function TextArea({ title, date, slug, excerpt, readingTime }) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid item xs={12} sm={5}>
      <Grid
        container
        className={classes.allText}
        direction='column'
        justify='flex-start'
        alignItems='center'>
        <Grid item>
          <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
            <Typography align='center' component='h2' variant={isSmallScreen ? 'h4' : 'h3'}>
              {title}
            </Typography>
          </MuiLink>
        </Grid>
        <Grid item>
          <Typography
            className={classes.dateReadingTime}
            variant='overline'
            display='block'>
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
        </Grid>
        <Grid item>
          <Typography variant='body2' color='textSecondary' align='center'>
            {excerpt}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
