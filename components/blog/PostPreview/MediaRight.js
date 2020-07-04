import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import CardMedia from '@material-ui/core/CardMedia'
import MuiLink from '../../MuiLink'
import CustomDate from '../CustomDate'

const useStyles = makeStyles(theme => ({
  postContent: {
    marginBottom: theme.spacing(3),
  },

  image: {
    cursor: 'pointer',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '3rem',
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: 5,
    },
    [theme.breakpoints.down('lg')]: {
      height: 200,
    },

    [theme.breakpoints.up('lg')]: {
      height: 400,
    },
  },
  textArea: {
    padding: '0 1rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '3rem',
    },
  },
}))

export default function MediaLeft({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const classes = useStyles()
  return (
    <>
      <Grid
        container
        className={classes.postContent}
        direction='row'
        justify='space-between'
        alignItems='flex-start'>
        <Grid item xs={12} sm={5}>
          <Link as={`/blog/${slug}`} href='/blog/[slug]'>
            <Paper elevation={3}>
              <CardMedia
                className={classes.image}
                image={coverImage}
                title={title}
              />
            </Paper>
          </Link>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Grid
            container
            className={classes.textArea}
            direction='column'
            justify='space-around'
            alignItems='flex-start'>
            <Grid item>
              <MuiLink
                as={`/blog/${slug}`}
                href='/blog/[slug]'
                underline='none'>
                <Typography variant='h4'>{title}</Typography>
              </MuiLink>
            </Grid>
            <Grid item>
              <Typography variant='overline' display='block' gutterBottom>
                <CustomDate dateString={date} /> — {author.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' gutterBottom>
                {excerpt}
              </Typography>
            </Grid>
          </Grid>
          <Divider style={{ margin: '2rem 6rem' }} />
        </Grid>
      </Grid>
    </>
  )
}
