import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
  },
  topGrid: {

  },
  image: {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.between('sm', 'lg')]: {
      borderRadius: theme.shape.borderRadius,
    },
    [theme.breakpoints.up('lg')]: {},
  },
  allTextContainer: {
    padding: theme.spacing(0, 2, 3, 1),
  },
  projectTitle: {
    textAlign: 'left',
  },
  subHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color:
    theme.palette.type === 'dark'
      ? theme.palette.secondary.light
      : theme.palette.primary.light,
  },
  subHeadingBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: theme.mixins.toolbar.minHeight,
  },
  paragraphBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: theme.spacing(8),
    padding: theme.spacing(1, 0, 3, 0),
  },
}))

export default function Album() {
  const classes = useStyles()
  const theme = useTheme()
  const image =
    theme.palette.type === 'dark'
      ? '/weathernaught-dark.png'
      : '/weathernaught.png'
  const heroParagraph = `Something short and leading about the collection below—its contents, the creator, etc.
  Make it short and sweet, but not too short so folks don't simply skip over it
  entirely.`
  return (
    <article className={classes.rootWorkPage}>
      <PageIntro title='Work' paragraph={heroParagraph} />
      <Container>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-start'
          className={classes.topGrid}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paperImageContainer} elevation={10}>
              <CardMedia
                component='img'
                className={classes.image}
                src={image}
                title='Weathernaut App'
              />
            </Paper>
          </Grid>
          <Grid item className={classes.allTextContainer} xs={12} sm={4}>
            <Box>
              <Typography
                className={classes.projectTitle}
                variant='h4'
                component='h2'
                gutterBottom>
                Weathernaut
              </Typography>
            </Box>
            <section className={classes.keyPointsContainer}>
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
                <Typography variant='body2' component='p' color='textSecondary'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Consectetur adipiscing elit. Suspendisse malesuada lacus
                  ex,
                </Typography>
              </Box>
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
                <Typography variant='body2' component='p' color='textSecondary'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </Box>
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
                <Typography variant='body2' component='p' color='textSecondary'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Adipiscing elit. Suspendisse malesuada lacus ex, sit
                  amet blandit.
                </Typography>
              </Box>
            </section>
          </Grid>
        </Grid>
      </Container>
    </article>
  )
}
