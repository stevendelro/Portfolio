import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CustomDate from '../../CustomDate'
import MuiLink from '../../MuiLink'

const useStyles = makeStyles(theme => ({
  dateReadingTime: {
    padding: theme.spacing(2),
  },
  dateReadingTime: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '.7rem',
    },
  },
  readingTime: {
    lineHeight: '.1rem',
    textAlign: 'center',
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
}))

export default function DateReadingTime({ slug, title, date, readingTime }) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid item sm={5}>
      <Grid
        container
        className={classes.dateReadingTime}
        direction='row'
        justify='space-evenly'
        alignItems='center'>
        <Grid item>
          <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
            <Typography className={classes.links} variant={isSmallScreen ? 'h4' : 'h3'}>
              {title}
            </Typography>
          </MuiLink>
        </Grid>
        <Grid item>
          <Typography
            className={classes.dateReadingTime}
            variant='overline'
            display='block'
            gutterBottom>
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
      </Grid>
    </Grid>
  )
}
