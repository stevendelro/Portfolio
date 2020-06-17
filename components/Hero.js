import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  heroContent: {

  },
}))

function Hero() {
  const classes = useStyles()
  return (
    <div className={classes.heroContent}>
      <Container maxWidth='lg'>
        <div>
          This is the Hero Component
        </div>
      </Container>
    </div>
  )
}

export default Hero
