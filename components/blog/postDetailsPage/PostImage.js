import { makeStyles, useTheme } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  postImage__imageContainer: {
    borderRadius: 0,
    height: '50vw',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('xl')]: {
      borderRadius: 5,
    },
    [theme.breakpoints.up('lg')]: {
      width: '1040px',
      maxHeight: '630px',
    },
    [theme.breakpoints.down('lg')]: {
      width: '100vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  postImage__image: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('xl')]: {
      borderRadius: 5,
    },
  },
}))

export default function PostImage({ title, coverImage }) {
  const classes = useStyles()
  const theme = useTheme()
  const isXlScreenUp = useMediaQuery(theme.breakpoints.up('xl'))
  return (
    <section id='postDetailsPage__Image'>
      <Paper
        as='figure'
        className={classes.postImage__imageContainer}
        elevation={isXlScreenUp ? 7 : 0}>
        <CardMedia
          className={classes.postImage__image}
          title={title}
          image={coverImage.url}
        />
      </Paper>
    </section>
  )
}
