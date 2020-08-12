import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import CustomDate from '../../CustomDate'

const useStyles = makeStyles(theme => ({
  projectHeader__ROOT: {
    margin: theme.spacing(4, 0, 4),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(8, 0, 4),
    }
  },
  projectHeader__title: {
    width: '100%',
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
    [theme.breakpoints.between(700, 960)]: {
      fontSize: theme.typography.pxToRem(80),
    },
    [theme.breakpoints.between(600, 700)]: {
      fontSize: theme.typography.pxToRem(69),
    },
    [theme.breakpoints.between(500, 600)]: {
      fontSize: theme.typography.pxToRem(65),
    },
    [theme.breakpoints.between(400, 500)]: {
      fontSize: theme.typography.pxToRem(58),
    },
    [theme.breakpoints.between(350, 400)]: {
      fontSize: theme.typography.pxToRem(53),
    },
    [theme.breakpoints.down(350)]: {
      fontSize: theme.typography.pxToRem(40),
    },
    [theme.breakpoints.down(280)]: {
      fontSize: theme.typography.pxToRem(30),
    },
  },
  projectHeader__dates: {
    lineHeight: 1.4,
    [theme.breakpoints.down('xs')]: {
      lineHeight: 1,
      fontSize: theme.typography.pxToRem(5),
    },
  },
  projectHeader__divider: {
    margin: theme.spacing(1, 0),
  },
}))

export default function ProjectHeader({
  projectName,
  dateCreated,
  lastUpdated,
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isWatchScreenDown = useMediaQuery(theme.breakpoints.down(280))
  const isTinyScreenDown = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <header
      id='ProjectDetailsPage__header'
      className={classes.projectHeader__ROOT}>
      <Typography
        className={classes.projectHeader__title}
        variant='h1'
        component='h1'
        align='center'>
        {projectName}
      </Typography>
      <Divider className={classes.projectHeader__divider} />
      <Typography
        className={classes.projectHeader__dates}
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
