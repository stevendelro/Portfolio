import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CustomDate from '../../../CustomDate'
import MuiLink from '../../../MuiLink'
import { truncate } from '../../../layout/utils'

const useStyles = makeStyles(theme => ({
  allText: {
    padding: theme.spacing(0, 1),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(5, 5),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0,3),
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
  links: {
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
  excerpt: {
    overflow: 'scroll'
  }
}))

export default function TextArea({ title, date, slug, excerpt, readingTime }) {
  const classes = useStyles()
  const theme = useTheme()
  let titleVariant = 'h4'
  const isSmallScreenOnly = useMediaQuery(theme.breakpoints.only('sm'))
  const isXLargeScreenUp = useMediaQuery(theme.breakpoints.up('xl'))
  if (isSmallScreenOnly) {
    titleVariant = 'h5'
  } else if (isXLargeScreenUp) {
    titleVariant = 'h3'
  }
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
            <Typography
              className={classes.links}
              align='center'
              component='h2'
              variant={titleVariant}>
              {title}
            </Typography>
          </MuiLink>
        </Grid>
        <Grid  item>
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
        <Grid className={classes.excerpt}  item>
          <Typography variant='body2' color='textSecondary' align='center'>
          {truncate(excerpt, 25)}
            {/* {excerpt} */}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
