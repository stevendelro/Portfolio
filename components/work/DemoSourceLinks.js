import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  demoSourceLinks__date: {
    lineHeight: 1.4,
  },
  demoSourceLinks__link: {
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
    <a href={liveDemo} className={classes.demoSourceLinks__link}>
      LIVE DEMO
    </a>
  )
  const GithubLink = (
    <a href={sourceCode} className={classes.demoSourceLinks__link}>
      SOURCE CODE
    </a>
  )

  return (
    <section id='demoSourceLinks'>
      <Typography
        className={classes.demoSourceLinks__date}
        color='textSecondary'
        variant='overline'
        display='block'>
        {WebsiteLink} • {GithubLink}
      </Typography>
    </section>
  )
}
