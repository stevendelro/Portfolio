import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import TitleDateAuthor from './TitleDateAuthor'
import Excerpt from './Excerpt'
import Image from './Image'

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
  allText: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: '0 1rem',
    },
  },
}))

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  // titlePosition,
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  // if (titlePosition === 'right') {

  // }
  return (
    <>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={11} lg={10} xl={6}>
          <Image slug={slug} coverImage={coverImage} title={title} />
          <Grid
            container
            className={classes.allText}
            direction='row'
            justify='space-between'
            alignItems='flex-start'>
            <Excerpt excerpt={excerpt} />
            <TitleDateAuthor
              slug={slug}
              title={title}
              date={date}
              author={author}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default HeroPost
