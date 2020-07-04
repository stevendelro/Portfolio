import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: '#f9f9f9',
    padding: theme.spacing(8, 0, 6),
  },

}));

function HeroText({title, paragraph}) {
  const classes = useStyles()
  return (
    <div className={classes.heroContent}>
    <Container maxWidth="sm">
      <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        {paragraph}
      </Typography>
    </Container>
  </div>
  )
}

export default HeroText
