import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import CustomDate from './CustomDate'
import PostTitle from './PostTitle'

const useStyles = makeStyles(theme => ({
  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  media: {
    height: 200,
  },
}))

export default function PostHeader({ title, coverImage, date, author }) {
  const classes = useStyles()
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='hidden md:block md:mb-12'>
        {author && (
          <>
            <Avatar
              className={classes.largeAvatar}
              alt={author.name}
              src={author.picture}
            />
            <Typography variant='h4' gutterBottom>
              {author.name}
            </Typography>
          </>
        )}
      </div>
      <CardMedia
        className={classes.media}
        title={title}
        image={coverImage.url}
      />
      <div className='max-w-2xl mx-auto'>
        {/* <div className='block md:hidden mb-6'>
          {author && (
            <>
              <Avatar
                className={classes.largeAvatar}
                alt={author.name}
                src={author.picture}
              />
              <Typography variant='h4' gutterBottom>
                {author.name}
              </Typography>
            </>
          )}
        </div> */}
        <Typography variant='h1' component='h2' gutterBottom>
          <CustomDate dateString={date} />
        </Typography>
      </div>
    </>
  )
}
