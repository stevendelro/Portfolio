import moment from 'moment'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    height: 'auto',
  },
  media: {
    [theme.breakpoints.down('sm')]: {
      height: 140,
    },
    [theme.breakpoints.down('md')]: {
      height: 230,
    },
    [theme.breakpoints.up('md')]: {
      height: 350,
    },
  },
  cardButton: {
    flexGrow: 1,
  },
}))

export default function Post({
  title,
  slug,
  image,
  excerpt,
  readingTime,
  published,
}) {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardHeader
          title={title}
          subheader={
            <>
              <Typography
                component='span'
                variant='subtitle1'
                color='textPrimary'>
                {`${moment(published).format('MMMM Do, YYYY')}`}
              </Typography>
              {` — ${readingTime} min`}
            </>
          }
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component='img'
            src={image}
            title={title}
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {excerpt}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href='/blog/[postSlug]' as={`/blog/${slug}`}>
            <Button
              component='a'
              className={classes.cardButton}
              size='small'
              color='primary'>
              read full post
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
