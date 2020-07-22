import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import PageIntro from '../components/PageIntro'

const useStyles = makeStyles(theme => ({
  rootMailPage: {
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
  div: {
    height: '53vh',
  },
}))
const heroParagraph = `Thanks for checking out my site. I'm always open to
job opportunites, questions, comments, and suggestions for future blog posts.
And, if you happen to find a bug, this would be the perfect place to let me know!`

const heroParagraph2 = `Odio morbi quis commodo odio aenean
sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
eu scelerisque felis imperdiet proin fermentum leo.`

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

const onSubmit = values => console.log('Form Data: ', values)

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
})
export default function Mail() {
  const classes = useStyles()
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
    <article id='MainMailPageBody' className={classes.rootMailPage}>
      <PageIntro title='Mail' paragraph={heroParagraph} />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
        </div>
      </Container>
      <div className={classes.div}></div>
    </article>
  )
}
