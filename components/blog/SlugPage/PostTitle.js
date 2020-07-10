import Typography from '@material-ui/core/Typography'

export default function PostTitle({ children }) {
  return (
    <Typography variant="h1" component="h2" gutterBottom>
      {children}
    </Typography>
  )
}
