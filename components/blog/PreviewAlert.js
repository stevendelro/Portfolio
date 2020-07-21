import { makeStyles } from '@material-ui/core/styles'
import MuiAlert from '@material-ui/lab/Alert'
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function PreviewAlert() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert onClose={() => window.close()} severity='error'>
          PREVIEW MODE
        </Alert>
      </Snackbar>
    </div>
  )
}
