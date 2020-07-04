import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  smallScreen: {
    backgroundColor: '#f9f9f9',
    padding: theme.spacing(8, 0, 6),
    [theme.breakpoints.up('md')]: {
      marginBottom: '3rem',
    },
  },
  notSmallScreen: {
    backgroundColor: '#f9f9f9',
    margin: theme.spacing(5, 0, 5, 0),

  },
  paragraph: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 1, 0, 1),
    },
    margin: theme.spacing(0, 5, 0, 5),
  },
}))

export default function PageIntro({ title, paragraph }) {
  const classes = useStyles()
  const theme = useTheme()
  const xSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  if (xSmallScreen) {
    return (
      <div className={classes.smallScreen}>
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h1'
            align='center'
            color='primary'
            gutterBottom>
            {title}
          </Typography>
          <Typography
            className={classes.paragraph}
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph>
            {paragraph}
          </Typography>
        </Container>
      </div>
    )
  }

  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      <Grid item xs={12} sm={10} lg={8} xl={6}>
        <Grid
          container
          className={classes.notSmallScreen}
          direction='row'
          justify='center'
          alignItems='center'>
          <Grid item sm={3}>
            <Typography
              component='h1'
              variant='h1'
              align='center'
              color='primary'
              gutterBottom>
              {title}
            </Typography>
          </Grid>

          <Grid item sm={9}>
            <Typography
              className={classes.paragraph}
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph>
              {paragraph}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
