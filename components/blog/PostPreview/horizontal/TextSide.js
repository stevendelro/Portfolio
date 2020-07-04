import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CustomDate from '../../CustomDate'
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
  dateAuthor: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '.65rem',
    },
  },
}))

export default function TextSide({ title, author, date, slug, excerpt }) {
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
            <Typography align='center' variant={isSmallScreen ? 'h4' : 'h3'}>
              {title}
            </Typography>
          </MuiLink>
        </Grid>
        <Grid item>
          <Typography
            className={classes.dateAuthor}
            variant='overline'
            display='block'>
            <CustomDate dateString={date} /> — {author.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' color='textSecondary' align='center'>
            {excerpt}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}