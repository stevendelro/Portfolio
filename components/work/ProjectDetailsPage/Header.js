import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import CustomDate from '../../CustomDate'

const useStyles = makeStyles(theme => ({
  rootProjectHeader: {
    margin: theme.spacing(4, 0),
  },
  title: {
    marginTop: theme.spacing(2),
    fontWeight: 500,
    [theme.breakpoints.up(1380)]: {
      fontSize: theme.typography.pxToRem(115),
    },
    [theme.breakpoints.between(1280, 1380)]: {
      fontSize: theme.typography.pxToRem(107),
    },
    [theme.breakpoints.only('md')]: {
      fontSize: theme.typography.pxToRem(100),
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: theme.typography.pxToRem(80),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(50),
    },
    [theme.breakpoints.down(340)]: {
      fontSize: theme.typography.pxToRem(40),
    },
    [theme.breakpoints.down(280)]: {
      fontSize: theme.typography.pxToRem(30),
    },
  },
  dates: {
    lineHeight: 1.4,
    [theme.breakpoints.down('xs')]: {
      lineHeight: 1,
      fontSize: theme.typography.pxToRem(5),
    },
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
}))

export default function ProjectHeader({ projectName, dateCreated, lastUpdated }) {
  const classes = useStyles()
  const theme = useTheme()
  const isWatchScreenDown = useMediaQuery(theme.breakpoints.down(280))
  const isTinyScreenDown = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <header
      id='header--ProjectDetailsPage'
      className={classes.rootProjectHeader}>
      <Typography
        className={classes.title}
        variant='h1'
        component='h1'
        align='center'>
        {projectName}
      </Typography>
      <Divider className={classes.divider} />
      <Typography
        className={classes.dates}
        color='textSecondary'
        variant='overline'
        display='block'>
        <Grid
          container
          direction={isWatchScreenDown ? 'column' : 'row'}
          justify='space-between'
          alignItems='center'>
          <Box>
            {isTinyScreenDown ? null : 'Date'} Created:{' '}
            <CustomDate dateString={dateCreated} />
          </Box>
          <Box>
            {isTinyScreenDown ? null : 'Last'} Updated:{' '}
            <CustomDate dateString={lastUpdated} />
          </Box>
        </Grid>
      </Typography>
    </header>
  )
}
