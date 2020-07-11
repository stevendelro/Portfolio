import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  smallScreen: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
    [theme.breakpoints.up('md')]: {
      marginBottom: '3rem',
    },
  },
  notSmallScreen: {
    padding: theme.spacing(5, 0, 5, 0),
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  paragraph: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 1, 0, 1),
    },
    margin: theme.spacing(0, 5, 0, 5),
    fontSize: '1.3rem',
  },
}))

export default function PageIntro({ title, paragraph }) {
  const classes = useStyles()
  const theme = useTheme()
  const xSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  if (xSmallScreen) {
    return (
      <header className={classes.smallScreen}>
        <Container maxWidth='sm'>
          <Typography component='h1' variant='h1' align='center' gutterBottom>
            {title}
          </Typography>
          <Typography
            className={classes.paragraph}
            variant='body2'
            align='center'
            color='textSecondary'
            paragraph>
            {paragraph}
          </Typography>
        </Container>
      </header>
    )
  }

  return (
    <header className={classes.notSmallScreen}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={10} lg={8} xl={6}>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item sm={3}>
              <Typography
                component='h1'
                variant='h1'
                align='center'
                gutterBottom>
                {title}
              </Typography>
            </Grid>

            <Grid item sm={9}>
              <Typography
                className={classes.paragraph}
                variant='body2'
                align='center'
                color='textSecondary'
                paragraph>
                {paragraph}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  )
}
