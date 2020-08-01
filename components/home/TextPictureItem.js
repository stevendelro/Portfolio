import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  text: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 3),
      marginBottom: theme.spacing(10),
    },
  },
  image: {
    padding: theme.spacing(3, 5),
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(3, 0),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0, 3, 0),
    },
  },
}))



export default function TextPictureItem({
  darkModeImage,
  lightModeImage,
  text,
  imageOrientation = 'right',
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('xs'))

  const TextSide = () => {
    return (
      <Grid item xs={12} sm={5}>
        <Typography
          component='p'
          variant='body2'
          color='textSecondary'
          className={classes.text}
          align={isTinyScreen ? 'left' : imageOrientation}
          paragraph>
          {text}
        </Typography>
      </Grid>
    )
  }

  const ImageSide = () => {
    const { type } = theme.palette
    const isDarkMode = type === 'dark' ? true : false
    return (
      <Grid item xs={12} sm={7} className={classes.image}>
        {isDarkMode ? darkModeImage : lightModeImage}
      </Grid>
    )
  }

  let composedArrangement
  switch (imageOrientation) {
    case 'right':
      // prettier-ignore
      isTinyScreen
      // Keep image above text on small screens
      ? composedArrangement = <><ImageSide /><TextSide /></>
      : composedArrangement = <><TextSide /><ImageSide /></>
      break
    case 'left':
      // prettier-ignore
      composedArrangement = <><ImageSide /><TextSide /></>
      break

    default:
      // prettier-ignore
      composedArrangement = <><TextSide /><ImageSide /></>
      break
  }

  return (
    <section id='AboutTextPictureItem' className={classes.rootMainIndex}>
      <Grid container direction='row' justify='center' alignItems='center'>
        {composedArrangement}
      </Grid>
    </section>
  )
}
