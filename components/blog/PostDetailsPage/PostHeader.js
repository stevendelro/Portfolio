import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import AvatarStamp from '../../AvatarStamp'

const useStyles = makeStyles(theme => ({
  postHeader__ROOT: {
    margin: theme.spacing(4, 0, 7, 0),
  },
  postHeader__title: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      fontWeight: 500,
    },
  },
  postHeader__excerpt: {
    marginBottom: theme.spacing(3),
    fontSize: '1.2rem',
  },
  postHeader__divider: {
    margin: theme.spacing(1, 0),
  },
}))

export default function PostHeader({
  title,
  date,
  author,
  excerpt,
  readingTime,
}) {
  const classes = useStyles()
  return (
    <header id='postDetailsPage__Header' className={classes.postHeader__ROOT}>
      <Typography
        className={classes.postHeader__title}
        variant='h3'
        component='h1'
        gutterBottom>
        {title}
      </Typography>
      <Typography
        className={classes.postHeader__excerpt}
        color='textSecondary'
        variant='body2'
        component='p'>
        {excerpt}
      </Typography>
      <Divider className={classes.postHeader__divider} />
      <AvatarStamp author={author} date={date} readingTime={readingTime} />
    </header>
  )
}
