import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MuiLink from '../../MuiLink'
import CustomDate from './CustomDate'

function TitleBox({ title, author, date, slug, variant }) {
  return (
    <>
      <Grid item>
        <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
          <Typography variant={variant}>{title}</Typography>
        </MuiLink>
      </Grid>
      <Grid item>
        <Typography variant='overline' display='block' gutterBottom>
          <CustomDate dateString={date} /> — {author.name}
        </Typography>
      </Grid>
    </>
  )
}

export default TitleBox
