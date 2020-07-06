import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: 0,
    height: '50vw',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('lg')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '1040px',
      maxHeight: '630px'
    },
  },
  image: {
    width: '100%',
    height: '100%'
  }
}))

export default function PostImage({ title, coverImage }) {
  const classes = useStyles()
  return (
    <Paper className={classes.paper} elevation={0}>
      <CardMedia className={classes.image} title={title} image={coverImage.url} />
    </Paper>
  )
}

