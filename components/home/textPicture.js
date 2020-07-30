import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import AboutMeImage from '../components/svg/AboutMeImage'
import PageIntro from '../components/PageIntro'

const useStyles = makeStyles(theme => ({
  rootMainIndex: {
    minHeight: '100vh',
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
  text: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
}))

export default function Index({text, image}) {
  const classes = useStyles()
  return (
    <section>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={5}>
          <Typography
            component='p'
            variant='body2'
            color='textSecondary'
            className={classes.text}
            paragraph>
            {text}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <AboutMeImage />
        </Grid>
      </Grid>
    </section>
  )
}
