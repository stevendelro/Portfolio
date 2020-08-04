import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CustomDate from './CustomDate'

const useStyles = makeStyles(theme => ({
  avatarStamp__avatar: {
    margin: theme.spacing(1, 1),
  },
  avatarStamp__author: {
    lineHeight: 1.4,
  },
  avatarStamp__date: {
    lineHeight: 1.4,
  },
}))

export default function AvatarStamp({ author, date, readingTime }) {
  const classes = useStyles()
  return (
    <article id='avatarStamp'>
      <Grid container direction='row' justify='flex-start' alignItems='center'>
        <Grid item>
          <Avatar
            className={classes.avatarStamp__avatar}
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
                className={classes.avatarStamp__author}
                variant='overline'
                display='block'>
                {author.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.avatarStamp__date}
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
