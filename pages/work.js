import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PageIntro from '../components/PageIntro'

const useStyles = makeStyles(theme => ({
  rootWorkPage: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  paperImageContainer: {
    margin: theme.spacing(6, 4, 0, 4),
    [theme.breakpoints.only('md')]: {
      margin: theme.spacing(4, 3, 0, 0),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  projectTitle: {
    cursor: 'pointer',
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(55),
      margin: theme.spacing(3, 0, 5),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(40),
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    [theme.breakpoints.between('sm', 'lg')]: {
      borderRadius: theme.shape.borderRadius,
    },
  },
  allTextContainer: {
    padding: theme.spacing(0, 2, 3, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 1, 1, 1),
    },
  },
  keyPoint: {
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
      padding: theme.spacing(1),
    },
  },
  subHeadingBox: {
    minHeight: theme.mixins.toolbar.minHeight,
  },
  paragraphBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: theme.spacing(8),
    padding: theme.spacing(1, 0, 3, 0),
  },
  subHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.light
        : theme.palette.primary.light,
  },
}))

export default function Album() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.only('sm'))
  const image = '/weathernaught.png'
  const heroParagraph = `Something short and leading about the collection below—its contents, the creator, etc.
  Make it short and sweet, but not too short so folks don't simply skip over it
  entirely.`
  return (
    <article className={classes.rootWorkPage}>
      <PageIntro title='Work' paragraph={heroParagraph} />
      <Container>
        <Grid
          container
          direction={isSmallScreen ? 'column' : 'row'}
          justify='space-between'
          alignItems={isSmallScreen ? 'center' : 'flex-start'}
          className={classes.topGrid}>
          <Grid item xs={12} sm={11} md={8}>
            <Paper className={classes.paperImageContainer} elevation={7}>
              <CardMedia
                component='img'
                className={classes.image}
                title='Weathernaut App'
                src={image}
                onClick={() => window.location.href='https://weathernaut.now.sh'}
              />
            </Paper>
          </Grid>
          <Grid
            item
            className={classes.allTextContainer}
            xs={12}
            sm={11}
            md={4}>
            <Box>
              <Typography
                className={classes.projectTitle}
                variant='h4'
                component='h2'
                onClick={() => window.location.href='https://weathernaut.now.sh'}
                gutterBottom>
                Weathernaut
              </Typography>
            </Box>
            <section>
              <Grid
                container
                direction={isSmallScreen ? 'row' : 'column'}
                justify='space-between'
                alignItems='flex-start'>
                <Grid item sm={4} md={12} className={classes.keyPoint}>
                  <Box className={classes.subHeadingBox}>
                    <Typography
                      variant='h5'
                      component='h3'
                      color='primary'
                      className={classes.subHeading}>
                      Summary
                    </Typography>
                  </Box>
                  <Box className={classes.paragraphBox}>
                    <Typography
                      variant='body2'
                      component='p'
                      color='textSecondary'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex,
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={4} md={12} className={classes.keyPoint}>
                  <Box className={classes.subHeadingBox}>
                    <Typography
                      variant='h5'
                      component='h3'
                      color='primary'
                      className={classes.subHeading}>
                      Key Features
                    </Typography>
                  </Box>
                  <Box className={classes.paragraphBox}>
                    <Typography
                      variant='body2'
                      component='p'
                      color='textSecondary'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={4} md={12} className={classes.keyPoint}>
                  <Box className={classes.subHeadingBox}>
                    <Typography
                      variant='h5'
                      component='h3'
                      color='primary'
                      className={classes.subHeading}>
                      Technologies
                    </Typography>
                  </Box>
                  <Box className={classes.paragraphBox}>
                    <Typography
                      variant='body2'
                      component='p'
                      color='textSecondary'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Adipiscing elit. Suspendisse malesuada
                      lacus ex, sit amet blandit.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </section>
          </Grid>
        </Grid>
      </Container>
    </article>
  )
}
