import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  video__ROOT: {
    verticalAlign: 'middle',
    borderRadius: theme.shape.borderRadius,
  },
}))

export default function Video({
  imagePath,
  videoPath,
  height = 'auto',
  width = '100%',
}) {
  const classes = useStyles()
  return (
    <video
      className={classes.video__ROOT}
      height={height}
      width={width}
      autoPlay
      muted
      loop
      preload='auto'
      poster={imagePath}
      data-setup='{}'>
      <source src={videoPath} type='video/mp4'></source>
      <p className='vjs-no-js'>
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that supports HTML5 video. See: https://videojs.com/html5-video-support/
      </p>
    </video>
  )
}
