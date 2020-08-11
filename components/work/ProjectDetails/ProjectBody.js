import { makeStyles } from '@material-ui/core/styles'

import MarkdownRenderer from '../../MarkdownRenderer'

const useStyles = makeStyles(theme => ({
  postBody__ROOT: {
    marginBottom: theme.spacing(10),
  },
}))

export default function ProjectBody({ content }) {
  const classes = useStyles()
  return (
    <main id='ProjectDetailsPage__Body' className={classes.postBody__ROOT}>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </main>
  )
}
