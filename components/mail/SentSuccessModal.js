import { makeStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  sentSuccessModal__ROOT: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sentSuccessModal__textContainer: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,

    boxShadow: theme.shadows[7],
    borderRadius: 4,
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1),
    },
  },
  sentSuccessModal__modalTitle: {
    textAlign: 'center',
    padding: theme.spacing(2, 0, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },
  sentSuccessModal__text: {
    padding: theme.spacing(2),
    fontSize: '1.3rem',
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
      textAlign: 'center',
    },
  },
}))

export default function SentSuccessModal({
  senderFirstName,
  setDisplayModal,
  displayModal,
}) {
  const classes = useStyles()
  const handleClose = () => {
    setDisplayModal(false)
  }
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.sentSuccessModal__ROOT}
      open={displayModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={displayModal}>
        <div className={classes.sentSuccessModal__textContainer}>
          <Typography
            id='transition-modal-title'
            variant='h2'
            className={classes.sentSuccessModal__modalTitle}
            gutterBottom>
            Thanks!
          </Typography>
          <Typography
            id='transition-modal-description'
            variant='body2'
            className={classes.sentSuccessModal__text}
            color='textSecondary'>
            I'll be in touch soon, {senderFirstName}.
          </Typography>
        </div>
      </Fade>
    </Modal>
  )
}
