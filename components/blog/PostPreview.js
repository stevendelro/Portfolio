import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import CustomDate from './CustomDate'

const useStyles = makeStyles(theme => ({
  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  media: {
    height: 200,
  },
}))

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const classes = useStyles()
  const image = (
    <CardMedia className={classes.media} title={title} image={coverImage.url} />
  )
  return (
    <Paper elevation={0}>
      <div>
        {slug ? (
          <Link as={`/blog/${slug}`} href='/blog/[slug]'>
            <a aria-label={title}>{image}</a>
          </Link>
        ) : (
          image
        )}
      </div>
      <Typography variant='h4' gutterBottom>
        <Link as={`/blog/${slug}`} href='/blog/[slug]'>
          <a>{title}</a>
        </Link>
      </Typography>
      <div>
        <CustomDate dateString={date} />
      </div>
      <Typography variant='subtitle1' gutterBottom>
        {excerpt}
      </Typography>
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
    </Paper>
  )
}
