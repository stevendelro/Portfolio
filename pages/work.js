import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PageIntro from '../components/PageIntro'
import ProjectImage from '../components/work/ProjectImage'
import ProjectText from '../components/work/ProjectText'

const useStyles = makeStyles(theme => ({
  rootWorkPage: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  mainContainer: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
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
  allTextContainer: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4),
    },
  },
  // Right Side Image - Text Styles
  textAlign_R: {
    textAlign: 'right',
  },
}))

export default function WorkPage() {
  const theme = useTheme()
  const classes = useStyles()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  // Set post orientation.
  const imageRight = false
  const image = '/weathernaught.png'
  const heroParagraph = `Something short and leading about the collection below—its contents, the creator, etc.
  Make it short and sweet, but not too short so folks don't simply skip over it
  entirely.`

  // Handle post orientation.
  let rowDirection = 'row'
  if (imageRight) {
    rowDirection = isSmallScreen ? 'row' : 'row-reverse'
  }
  return (
    <article className={classes.rootWorkPage}>
      <PageIntro title='Work' paragraph={heroParagraph} />
      <Box className={classes.mainContainer}>
        <Grid
          container
          direction={isSmallScreen ? 'column' : rowDirection}
          justify='space-between'
          alignItems={isSmallScreen ? 'center' : 'flex-start'}>
          {/* IMAGE SIDE */}
          <Grid item xs={12} sm={11} md={8}>
            <ProjectImage
              imageRight={imageRight}
              isSmallScreen={isSmallScreen}
              image={image}
            />
          </Grid>

          {/* TEXT SIDE */}
          <Grid
            item
            className={
              imageRight && !isSmallScreen
                ? classes.allTextContainer && classes.textAlign_R
                : classes.projectTitle
            }
            xs={12}
            sm={11}
            md={4}>
            <ProjectText
              imageRight={imageRight}
              isSmallScreen={isSmallScreen}
              rowDirection={rowDirection}
            />
          </Grid>
        </Grid>
      </Box>
    </article>
  )
}
