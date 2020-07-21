import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import React from 'react'
import TextField from '@material-ui/core/TextField'

import PageIntro from '../components/PageIntro'

const useStyles = makeStyles(theme => ({
  rootMailPage: {
    height: '100vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.common.black
        : theme.palette.common.white,

    margin: theme.spacing(3, 0, 2),
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  },
  checkbox: {
    marginLeft: 0,
  },
}))

export default function Mail() {
  const classes = useStyles()
  const heroParagraph = `Odio morbi quis commodo odio aenean
  sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
  integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
  eu scelerisque felis imperdiet proin fermentum leo.`
  return (
    <article id='MainMailPageBody' className={classes.rootMailPage}>
      <PageIntro title='Mail' paragraph={heroParagraph} />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  color='secondary'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  color='secondary'
                  name='lastName'
                  autoComplete='lname'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email'
                  color='secondary'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='message'
                  label='Message'
                  color='secondary'
                  type='message'
                  id='message'
                  multiline
                  rows={5}
                  autoComplete='message'
                />
              </Grid>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'>
                <Grid item xs={12}>
                  <FormControlLabel
                    className={classes.checkbox}
                    control={
                      <Checkbox value='allowExtraEmails' color='secondary' />
                    }
                    label="I'm interested in potentially working with you."
                    color='secondary'
                  />
                </Grid>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Send
            </Button>
          </form>
        </div>
      </Container>
    </article>
  )
}
