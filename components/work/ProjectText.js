import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import MuiLink from '../MuiLink'
import DemoSourceLinks from './DemoSourceLinks'

const useStyles = makeStyles(theme => ({
  projectTitle: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(55),
      margin: theme.spacing(3, 0, 0),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(40),
    },
    '&:hover': {
      cursor: 'pointer',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
      opacity: 1,
    },
  },
  demoSourceLinks: {
    paddingLeft: '3px',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
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
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 4, 4),
    },
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

// Default Placeholder Text to be displayed if none provided.
const summaryDefault = `
  Lorem ipsum dolor sit amet, consectetur adipiscing
  elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
  Consectetur adipiscing elit. Suspendisse malesuada lacus ex,
`

const keyFeaturesDefault = `
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
  lobortis eget.
`

const technologiesDefault = `
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
  lobortis eget. Adipiscing elit. Suspendisse malesuada lacus ex, sit amet
  blandit.
`

function ProjectText({ imageRight, isSmallScreen, rowDirection, projectInfo }) {
  const classes = useStyles()
  const {
    gitUsername,
    gitReponame,
    name,
    summary,
    keyFeatures,
    technologies,
    github,
    website,
  } = projectInfo
  return (
    <div>
      <Box>
        <MuiLink
          style={{ textDecoration: 'none' }}
          as={`/work/${gitUsername}/${gitReponame}`}
          href='/work/[...projectDetails]'
          naked>
          <Typography
            className={
              imageRight && !isSmallScreen
                ? classes.projectTitle && classes.textAlign_R
                : classes.projectTitle
            }
            variant='h4'
            component='h2'>
            {name ? name : 'Project Name'}
          </Typography>
        </MuiLink>
        <Box className={classes.demoSourceLinks}>
          <DemoSourceLinks
            liveDemo={website}
            sourceCode={github}
          />
        </Box>
      </Box>
      <section>
        <Grid
          container
          direction={true ? rowDirection : 'column'}
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
                {summary ? summary : summaryDefault}
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
                {keyFeatures ? keyFeatures : keyFeaturesDefault}
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
                {technologies ? technologies : technologiesDefault}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}

export default ProjectText
