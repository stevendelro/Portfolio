import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CustomDate from '../CustomDate'
import MuiLink from '../../MuiLink'

const useStyles = makeStyles(theme => ({
  titleDateAuthor: {
    padding: theme.spacing(2),
  },
  dateAuthor: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '.7rem',
    },
  },
}))

export default function TitleDateAuthor({slug, title, author, date}) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid item sm={5}>
      <Grid
        container
        className={classes.titleDateAuthor}
        direction='row'
        justify='space-evenly'
        alignItems='center'>
        <Grid item>
          <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
            <Typography variant={isSmallScreen ? 'h4' : 'h3'}>
              {title}
            </Typography>
          </MuiLink>
        </Grid>
        <Grid item>
          <Typography
            className={classes.dateAuthor}
            variant='overline'
            display='block'
            gutterBottom>
            <CustomDate dateString={date} /> — {author.name}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
