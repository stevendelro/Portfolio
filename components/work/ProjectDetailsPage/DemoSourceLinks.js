import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  date: {
    lineHeight: 1.4,
  },
  externalLinks: {
    textDecoration: 'none',
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    '&:hover': {
      cursor: 'pointer',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
      opacity: 1,
    },
  },

}))

export default function DemoSourceLinks({ liveDemo, sourceCode }) {
  const classes = useStyles()
  const WebsiteLink = (
    <a href={liveDemo} className={classes.externalLinks}>
      LIVE DEMO
    </a>
  )
  const GithubLink = (
    <a href={sourceCode} className={classes.externalLinks}>
      SOURCE CODE
    </a>
  )

  return (
    <section id='DemoSourceLinks'>
      <Typography
        className={classes.date}
        color='textSecondary'
        variant='overline'
        display='block'>
        {WebsiteLink} • {GithubLink}
      </Typography>
    </section>
  )
}
