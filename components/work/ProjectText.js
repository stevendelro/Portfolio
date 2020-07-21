import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
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
  keyPoint: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
      padding: theme.spacing(1),
    },
  },
  subHeadingBox: {
    minHeight: 45,
  },
  paragraphBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  subHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.light
        : theme.palette.primary.light,
  },
  // Right Side Image Styles
  textAlign_R: {
    textAlign: 'right',
  },
}))

//// Save these declarations for future update on developer expereince
//// TODO: Map out the three repeating subtitles and paragraphs.

// const summaryDefault = `Lorem ipsum dolor sit amet, consectetur adipiscing
// elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
// Consectetur adipiscing elit. Suspendisse malesuada lacus ex,`

// const keyFeaturesDefault = `Lorem ipsum dolor sit amet, consectetur
// adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
// lobortis eget.`

// const technologiesDefault = `Lorem ipsum dolor sit amet, consectetur
// adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
// lobortis eget. Adipiscing elit. Suspendisse malesuada lacus ex, sit amet
// blandit.`

function ProjectText({ imageRight, isSmallScreen, rowDirection }) {
  const classes = useStyles()
  return (
    <div>
      <Box>
        <Typography
          className={
            imageRight && !isSmallScreen
              ? classes.projectTitle && classes.textAlign_R
              : classes.projectTitle
          }
          variant='h4'
          component='h2'
          onClick={() => (window.location.href = 'https://weathernaut.now.sh')}
          gutterBottom>
          Weathernaut
        </Typography>
      </Box>
      <section>
        <Grid
          container
          direction={isSmallScreen ? rowDirection : 'column'}
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
              <Typography variant='body2' component='p' color='textSecondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Consectetur adipiscing elit. Suspendisse malesuada lacus
                ex,
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
              <Typography variant='body2' component='p' color='textSecondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
              <Typography variant='body2' component='p' color='textSecondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}

export default ProjectText
