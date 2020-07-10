import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import AvatarStamp from '../../AvatarStamp'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(7),
  },
  title: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      fontWeight: 500,
    },
  },
  excerpt: {
    marginBottom: theme.spacing(3),
    fontSize: '1.2rem',
  },
  divider: {
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
    <header id='SlugPage__Header' className={classes.root}>
      <Typography
        className={classes.title}
        variant='h3'
        component='h1'
        gutterBottom>
        {title}
      </Typography>
      <Typography
        className={classes.excerpt}
        color='textSecondary'
        variant='body2'
        component='p'>
        {excerpt}
      </Typography>
      <Divider className={classes.divider} />
      <AvatarStamp
        author={author}
        date={date}
        readingTime={readingTime}
      />
    </header>
  )
}
