import Link from 'next/link'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CustomDate from '../../components/blog/CustomDate'

const useStyles = makeStyles({
  media: {
    height: 400,
  },
})

function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
  const classes = useStyles()
  return (
    <Paper>
      <CardMedia
        className={classes.media}
        image={coverImage}
        title='Contemplative Reptile'
      />
      <CustomDate dateString={date} />
      <p>{excerpt}</p>
      <p>{author.name}</p>
      <Link as={`/blog/${slug}`} href='/blog/[slug]'>
        <a>{title}</a>
      </Link>
    </Paper>
  )
}

export default HeroPost
