import { makeStyles } from '@material-ui/core/styles'
import MuiAlert from '@material-ui/lab/Alert'
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

const useStyles = makeStyles(theme => ({
  previewAlert__ROOT: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default function PreviewAlert() {
  const classes = useStyles()
  return (
    <section className={classes.previewAlert__ROOT}>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert onClose={() => window.close()} severity='error'>
          PREVIEW MODE
        </Alert>
      </Snackbar>
    </section>
  )
}
