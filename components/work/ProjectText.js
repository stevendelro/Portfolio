import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import DemoSourceLinks from './DemoSourceLinks'
import MuiLink from '../MuiLink'

const useStyles = makeStyles(theme => ({
  projectText__title: {
    textAlign: 'left',
    [theme.breakpoints.only('sm')]: {
      fontSize: theme.typography.pxToRem(63),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      paddingTop: theme.spacing(7),
    },
    [theme.breakpoints.between(360, 600)]: {
      fontSize: theme.typography.pxToRem(55),
    },
    [theme.breakpoints.down(360)]: {
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
  projectText__demoSourceLinks: {
    paddingLeft: '3px',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      paddingBottom: theme.spacing(1),
    },
  },
  projectText__keyPoint: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
      padding: theme.spacing(1),
    },
  },
  projectText__subHeadingContainer: {
    minHeight: 45,
  },
  projectText__subHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.light
        : theme.palette.primary.light,
  },
  projectText__paragraphContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 4, 4),
    },
  },
  // Right Side Image Styles
  textAlign_R: {
    textAlign: 'right',
  },
}))

// Default Placeholder Text to be displayed if none provided.
const defaultText = `
  Lorem ipsum dolor sit amet, consectetur sit amet blandit leo malesuada
  adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
  lobortis eget. Adipiscing elit. Suspendisse malesuada lacus ex, sit amet
  blandit.
`

export default function ProjectText({
  imageRight,
  isSmallScreen,
  rowDirection,
  projectInfo,
}) {
  const classes = useStyles()
  const {
    name,
    summary,
    keyFeatures,
    technologies,
    github,
    website,
  } = projectInfo

  // Organize data into an array to map over.
  const sumText = summary ? summary : defaultText
  const keyText = keyFeatures ? keyFeatures : defaultText
  const techText = technologies ? technologies : defaultText
  const keyPointsArray = [
    ['Summary', sumText],
    ['Key Features', keyText],
    ['Technologies', techText],
  ]

  return (
    <section id='projectText'>
      <section id='projectText__titleArea'>
        <MuiLink
          style={{ textDecoration: 'none' }}
          as={`/work/${name}`}
          href='/work/[projectDetails]'
          naked>
          <Typography
            className={
              imageRight && !isSmallScreen
                ? classes.projectText__title && classes.textAlign_R
                : classes.projectText__title
            }
            variant='h4'
            component='h2'>
            {name ? name : 'Project Name'}
          </Typography>
        </MuiLink>
        <Box className={classes.projectText__demoSourceLinks}>
          <DemoSourceLinks liveDemo={website} sourceCode={github} />
        </Box>
      </section>
      <section id='projectText__keypoints'>
        <Grid
          container
          direction={true ? rowDirection : 'column'}
          justify='space-between'
          alignItems='flex-start'>
          {keyPointsArray.map((keyPoint, index) => {
            return (
              <Grid
                id={index}
                item
                sm={4}
                md={12}
                className={classes.projectText__keyPoint}>
                <Box className={classes.projectText__subHeadingContainer}>
                  <Typography
                    variant='h5'
                    component='h3'
                    color='primary'
                    className={classes.projectText__subHeading}>
                    {keyPoint[0]}
                  </Typography>
                </Box>
                <Box className={classes.projectText__paragraphContainer}>
                  <Typography
                    variant='body2'
                    component='p'
                    color='textSecondary'>
                    {keyPoint[1]}
                  </Typography>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </section>
    </section>
  )
}
