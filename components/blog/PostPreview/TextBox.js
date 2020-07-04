import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import MuiLink from '../../MuiLink'
import CustomDate from '../CustomDate'

const useStyles = makeStyles(theme => ({
  textArea: {
    padding: '0 1rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '3rem',
    },
  },
}))

function TextSide({ title, author, date, slug, excerpt }) {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.textArea}
      direction='column'
      justify='space-around'
      alignItems='flex-start'>
      <Grid item>
        <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
          <Typography variant='h4'>{title}</Typography>
        </MuiLink>
      </Grid>
      <Grid item>
        <Typography variant='overline' display='block' gutterBottom>
          <CustomDate dateString={date} /> — {author.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1' gutterBottom>
          {excerpt}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default TextSide

//deconstructed post exerpts to make more views
