import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  excerpt: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
}))

export default function Excerpt({excerpt}) {
  const classes = useStyles()
  return (
    <Grid item sm={7}>
    <Typography
      className={classes.excerpt}
      variant='body1'
      color='textSecondary'
      align='right'
      gutterBottom>
      {excerpt}
    </Typography>
  </Grid>
  )
}
