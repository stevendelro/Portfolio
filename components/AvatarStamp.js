import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CustomDate from './CustomDate'

const useStyles = makeStyles(theme => ({
  author: {
    lineHeight: 1.4,
  },
  date: {
    lineHeight: 1.4,
  },
  avatar: {
    margin: theme.spacing(1, 1),
  },
}))

export default function AvatarStamp({ author, date, readingTime }) {
  const classes = useStyles()
  return (
    <article id='AvatarStamp'>
      <Grid container direction='row' justify='flex-start' alignItems='center'>
        <Grid item>
          <Avatar
            className={classes.avatar}
            alt={author.name}
            src={author.picture.url}
          />
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            justify='flex-start'
            alignItems='flex-start'>
            <Grid item>
              <Typography
                className={classes.author}
                variant='overline'
                display='block'>
                {author.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.date}
                color='textSecondary'
                variant='overline'
                display='block'>
                <CustomDate dateString={date} /> • {readingTime}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </article>
  )
}
