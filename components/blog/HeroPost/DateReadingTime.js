import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CustomDate from '../../CustomDate'
import MuiLink from '../../MuiLink'

const useStyles = makeStyles(theme => ({
  /* >>>>>TITLE<<<<< */
  postTitle: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: theme.spacing(0, 1),
    },
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
  postTitle_L: {
    textAlign: 'right',
    padding: theme.spacing(2, 2, 0, 0),
  },
  postTitle_R: {
    textAlign: 'left',
    padding: theme.spacing(2, 0, 0, 2),

    /* >>>>>DATE/READING TIME<<<<< */
  },
  dateReadingTime: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '.7rem',
      padding: 0,
    },
  },
  dateReadingTime_L: {
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1, 2, 0, 0),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 2, 0, 0),
    },
  },
  dateReadingTime_R: {
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1, 0, 0, 2),
    },

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 0, 0, 2),
    },
  },
}))

export default function DateReadingTime({
  slug,
  title,
  date,
  readingTime,
  titlePosition,
}) {
  const theme = useTheme()
  const classes = useStyles()
  const {
    postTitle,
    postTitle_L,
    postTitle_R,
    dateReadingTime,
    dateReadingTime_L,
    dateReadingTime_R,
  } = classes

  const postOrientation = titlePosition.toLowerCase()
  const isSmallScreenOnly = useMediaQuery(theme.breakpoints.only('sm'))
  const isTinyScreenOnly = useMediaQuery(theme.breakpoints.only('xs'))

  const postTitleStyles = clsx({
    [postTitle]: true,
    [postTitle_L]: postOrientation === 'left' && true,
    [postTitle_R]: postOrientation === 'right' && true,
  })

  const drtStyles = clsx({
    [dateReadingTime]: true,
    [dateReadingTime_L]: postOrientation === 'left' && true,
    [dateReadingTime_R]: postOrientation === 'right' && true,
  })

  const flexed = postOrientation === 'right' ? 'flex-start' : 'flex-end'
  return (
    <Grid item sm={5}>
      <Grid
        container
        direction='row'
        justify={isTinyScreenOnly ? 'center' : flexed}
        alignItems='center'>
        <Grid item>
          <MuiLink as={`/blog/${slug}`} href='/blog/[slug]' underline='none'>
            <Typography
              className={postTitleStyles}
              variant={isSmallScreenOnly ? 'h4' : 'h3'}>
              {title}
            </Typography>
          </MuiLink>
        </Grid>
        <Grid item>
          <Typography
            className={drtStyles}
            variant='overline'
            display='block'
            gutterBottom>
            <CustomDate dateString={date} />
            <Typography
              variant='overline'
              color='textSecondary'
              display='inline'
              gutterBottom>
              {' '}
              • {readingTime}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
