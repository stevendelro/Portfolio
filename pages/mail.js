import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import TextField from '@material-ui/core/TextField'

import { MailDark, MailLight } from '../components/svg/Mail'
import PageIntro from '../components/PageIntro'
import SentSuccessModal from '../components/mail/SentSuccessModal'

const useStyles = makeStyles(theme => ({
  rootMailPage: {
    minHeight: '90vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image: {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(0, 1),
      marginBottom: theme.spacing(7),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
      marginBottom: theme.spacing(7),
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    maxWidth: 500,
    marginTop: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
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

const heroParagraph = `
  Thanks for checking out my site. I'm always open to job opportunites,
  questions, comments, and suggestions for future blog posts. And, if
  you happen to find a bug, this would be the perfect place to let me
  know!
`

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
})
export default function Mail() {
  const [displayModal, setDisplayModal] = useState(false)
  const [senderFirstName, setSenderFirstName] = useState('')
  const classes = useStyles()
  const theme = useTheme()
  const type = theme.palette.type
  const isDarkMode = type === 'dark' ? true : false

  const onSubmit = async (values, onSubmitProps) => {
    await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        message: values.message,
      }),
    })
    setSenderFirstName(values.firstName)
    onSubmitProps.resetForm()
    setDisplayModal(true)
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })
  const {
    errors,
    touched,
    values,
    handleChange,
    handleSubmit,
    getFieldProps,
  } = formik
  return (
    <>
      <Head>
        <title>Mail</title>
        <meta
          name='description'
          content={`This is the Contact page of Steven Del Rosario's self-developed website`}
        />
      </Head>
      <article id='MainMailPageBody' className={classes.rootMailPage}>
        <PageIntro title='Mail' paragraph={heroParagraph} />
        <Container maxWidth='lg'>
          <Grid
            container
            direction='row'
            justify='space-around'
            alignItems='center'>
            <Grid item className={classes.image} xs={12} md={8}>
              {isDarkMode ? <MailDark /> : <MailLight />}
            </Grid>
            <Grid item xs={12} md={4}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoFocus
                      fullWidth
                      id='firstName'
                      name='firstName'
                      label='First Name'
                      autoComplete='given-name'
                      variant='outlined'
                      color='secondary'
                      {...getFieldProps('firstName')}
                      error={errors.firstName && Boolean(touched.firstName)}
                      helperText={touched.firstName ? errors.firstName : ''}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id='lastName'
                      name='lastName'
                      label='Last Name'
                      autoComplete='family-name'
                      variant='outlined'
                      color='secondary'
                      {...getFieldProps('lastName')}
                      error={errors.lastName && Boolean(touched.lastName)}
                      helperText={touched.lastName ? errors.lastName : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id='email'
                      name='email'
                      label='Email'
                      autoComplete='email'
                      variant='outlined'
                      color='secondary'
                      {...getFieldProps('email')}
                      error={errors.email && Boolean(touched.email)}
                      helperText={touched.email ? errors.email : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      multiline
                      rows={5}
                      fullWidth
                      id='message'
                      name='message'
                      type='message'
                      label='Message'
                      autoComplete='message'
                      variant='outlined'
                      color='secondary'
                      onChange={handleChange}
                      value={values.message}
                      placeholder='Feel free to include any details.'
                    />
                  </Grid>
                </Grid>
                <Button
                  fullWidth
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.submit}>
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
          <SentSuccessModal
            senderFirstName={senderFirstName}
            setDisplayModal={setDisplayModal}
            displayModal={displayModal}
          />
        </Container>
      </article>
    </>
  )
}
