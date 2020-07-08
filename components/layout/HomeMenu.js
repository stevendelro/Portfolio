import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ButtonBase from '@material-ui/core/ButtonBase'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Logo from './Logo'

function a11yProps(tabIndex) {
  return {
    id: `horizontal-tab-${tabIndex}`,
    'aria-controls': `horizontal-tabpanel-${tabIndex}`,
  }
}

const MyTabs = withStyles({
  flexGrow: 1,
  indicator: {
    backgroundColor: '#ffffff00',
  },
})(Tabs);

const MyTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 90,
    margin: theme.spacing(0, 4),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 2),
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 1),
    },
    fontWeight: theme.typography.fontWeightLight,

    '&:hover': {
      color: theme.palette.primary.light,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: theme.palette.primary.light,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  tab: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      // width:
    },
    '& > span': {
      transition: 'all .2s ease-in-out',
      '&:hover': { transform: 'scale(1.1)' },
    },
  },
}))

function HomeMenu() {
  const classes = useStyles()
  const router = useRouter()
  const { pathname } = router
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  // Ensure proper tag is active on page refresh
  pathname === '/' && activeTabIndex !== 0 && setActiveTabIndex(0)
  pathname === '/work' && activeTabIndex !== 1 && setActiveTabIndex(1)
  pathname === '/blog' && activeTabIndex !== 2 && setActiveTabIndex(2)
  pathname === '/mail' && activeTabIndex !== 3 && setActiveTabIndex(3)

  const handleTabSwitch = (event, selectedTabIndex) => {
    event.preventDefault()
    setActiveTabIndex(selectedTabIndex)
  }

  const LinkTab = (label, index) => {
    const lowerCased = label.toLowerCase()
    return (
      <MyTab
        key={index}
        component='a'
        className={classes.tab}
        label={label}
        onClick={event => {
          event.preventDefault()
          router.push(`/${lowerCased === 'home' ? '' : lowerCased}`)
        }}
        {...a11yProps(index)}
      />
    )
  }

  return (
    <div className={classes.root}>

      <MyTabs
        orientation='horizontal'
        value={activeTabIndex}
        onChange={handleTabSwitch}
        aria-label='home menu tabs'
        className={classes.tabs}
        >
        {['HOME', 'WORK', 'BLOG', 'MAIL'].map((arrayItem, index) =>
          LinkTab(arrayItem, index)
        )}
      </MyTabs>

    </div>
  )
}

export default HomeMenu
