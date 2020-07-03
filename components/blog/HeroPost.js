import Link from 'next/link'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TitleBox from './shared/TitleBox'

const useStyles = makeStyles(theme => ({
  image: {
    marginTop: '1rem',
    marginBottom: '3rem',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      height: 400,
      borderRadius: 5,
    },
    [theme.breakpoints.up('lg')]: {
      height: 500,
      borderRadius: 5,
    },
  },
  textArea: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: '0 1rem',
    },
  },
}))

function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
  const classes = useStyles()
  return (
    <>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={11} lg={10} xl={8}>
          <Link as={`/blog/${slug}`} href='/blog/[slug]'>
            <Paper elevation={5}>
              <CardMedia
                className={classes.image}
                image={coverImage}
                title={title}
              />
            </Paper>
          </Link>
          <Grid
            container
            className={classes.textArea}
            direction='row'
            justify='space-between'
            alignItems='flex-start'>
            <Grid item sm={6}>
              <Grid
                container
                direction='column'
                justify='space-evenly'
                alignItems='flex-start'>
                <TitleBox title={title} author={author} date={date} slug={slug} variant='h3' />
              </Grid>
            </Grid>
            <Grid item sm={6}>
            <Typography variant="body1" gutterBottom>{excerpt}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default HeroPost
