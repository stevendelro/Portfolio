import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  PageIntro__root: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  PageIntro__Container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  PageIntro__title: {
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(2, 0, 0, 0),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(10, 0, 5, 0),
    },
  },
  PageIntro__paragraph: {
    fontSize: '1.3rem',
    padding: theme.spacing(),

    [theme.breakpoints.between('lg', 'xl')]: {
      padding: theme.spacing(0, 7),
      marginBottom: 0,
    },
    [theme.breakpoints.only('md')]: {
      padding: theme.spacing(0, 7),
      marginBottom: 0,
    },
    [theme.breakpoints.only('sm')]: {
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1, 6),
    },
  },
}))

export default function PageIntro({ title, paragraph }) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <header id='back-to-top-anchor' className={classes.PageIntro__root}>
      <Container maxWidth='md' className={classes.PageIntro__Container}>
        <Grid
          container
          direction={isSmallScreen ? 'column' : 'row'}
          justify='center'
          alignItems='center'>
          <Grid item xs={12} sm={5} md={3}>
            <Typography
              className={classes.PageIntro__title}
              component='h1'
              variant='h1'
              align='center'
              gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} md={9}>
            <Typography
              className={classes.PageIntro__paragraph}
              component='p'
              variant='body2'
              color='textSecondary'
              align='center'
              paragraph>
              {paragraph}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}
