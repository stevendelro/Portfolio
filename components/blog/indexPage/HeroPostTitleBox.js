import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import CustomDate from '../../CustomDate'
import MuiLink from '../../MuiLink'

const useStyles = makeStyles(theme => ({
  /* >>>>>TITLE<<<<< */
  title: {
    [theme.breakpoints.down('sm')]: {
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
  title_left: {
    textAlign: 'right',
    padding: theme.spacing(2, 2, 0, 0),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: theme.spacing(0),
    },
  },
  title_Right: {
    textAlign: 'left',
    padding: theme.spacing(2, 0, 0, 2),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: theme.spacing(0),
    },

    /* >>>>>DATE/READING TIME<<<<< */
  },
  dateTime: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '.7rem',
      padding: 0,
    },
  },
  dateTime_left: {
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1, 2, 0, 0),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 2, 0, 0),
    },
  },
  dateTime_right: {
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1, 0, 0, 2),
    },

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 0, 0, 2),
    },
  },
}))

export default function HeroPostTitleBox({
  slug,
  title: postTitle,
  date,
  readingTime,
  titlePosition,
}) {
  const theme = useTheme()
  const classes = useStyles()
  const {
    title,
    title_left,
    title_Right,
    dateTime,
    dateTime_left,
    dateTime_right,
  } = classes

  const postOrientation = titlePosition.toLowerCase()
  const isSmallScreenOnly = useMediaQuery(theme.breakpoints.only('sm'))
  const isTinyScreenOnly = useMediaQuery(theme.breakpoints.only('xs'))

  const titleStyles = clsx({
    [title]: true,
    [title_left]: postOrientation === 'left' && true,
    [title_Right]: postOrientation === 'right' && true,
  })

  const drtStyles = clsx({
    [dateTime]: true,
    [dateTime_left]: postOrientation === 'left' && true,
    [dateTime_right]: postOrientation === 'right' && true,
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
          <MuiLink
            as={`/blog/${slug}`}
            href='/blog/[postDetails]'
            underline='none'>
            <Typography
              className={titleStyles}
              variant={isSmallScreenOnly ? 'h4' : 'h3'}>
              {postTitle}
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
