import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CustomDate from '../../CustomDate'
import MuiLink from '../../MuiLink'

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'left',
    padding: theme.spacing(2, 0, 0, 2),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: theme.spacing(0, 1),
    },
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
  dateReadingTime: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'left',
      padding: theme.spacing(1, 0, 0, 2),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.7rem',
      padding: 0,
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      padding: theme.spacing(0, 0, 0, 2),
    },
  },
}))

export default function DateReadingTime({ slug, title, date, readingTime }) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreenOnly = useMediaQuery(theme.breakpoints.only('sm'))
  const isTinyScreenOnly = useMediaQuery(theme.breakpoints.only('xs'))
  return (
    <Grid item sm={5}>
      <Grid
        container
        direction='row'
        justify={isTinyScreenOnly ? 'center' : 'flex-start'}
        alignItems='center'>
        <Grid item>
          <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
            <Typography
              className={classes.title}
              variant={isSmallScreenOnly ? 'h4' : 'h3'}>
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
