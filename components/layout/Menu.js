import { makeStyles, withStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

function a11yProps(tabIndex) {
  return {
    id: `horizontal-tab-${tabIndex}`,
    'aria-controls': `horizontal-tabpanel-${tabIndex}`,
    'aria-labelledby': `horizontal-tab-${tabIndex}`
  }
}

// Custom Material UI tabs
const MyTabs = withStyles({
  indicator: {
    backgroundColor: '#ffffff00', // remove active tab indicator
  },
})(Tabs)

// Custom Material UI tab
const MyTab = withStyles(theme => ({
  root: {
    minWidth: 90,
    textTransform: 'none',
    fontSize: theme.typography.pxToRem(23),
    fontWeight: theme.typography.fontWeightLight,
    margin: theme.spacing(0, 4),
    [theme.breakpoints.down('lg')]: {
      margin: theme.spacing(0, 2),
      padding: theme.spacing(2, 0),
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    '&:hover': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.light
          : theme.palette.primary.light,
      opacity: 1,
    },
    '&$selected': {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(24),
      [theme.breakpoints.only('sm')]: {
        fontSize: theme.typography.pxToRem(21),
      },
    },
    '&:focus': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.light
          : theme.palette.primary.light,
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />)

const useStyles = makeStyles(theme => ({
  firstTab: {
    marginLeft: 0, // No left margin to align menu with container
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
    '& > span': {
      transition: 'all .2s ease-in-out',
      '&:hover': { transform: 'scale(1.1)' },
    },
  },
  tab: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
    '& > span': {
      transition: 'all .2s ease-in-out',
      '&:hover': { transform: 'scale(1.1)' },
    },
  },
}))

export default function Menu() {
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
        className={index === 0 ? classes.firstTab : classes.tab}
        label={label}
        aria-labelledby='menu'
        onClick={event => {
          event.preventDefault()
          router.push(`/${lowerCased === 'home' ? '' : lowerCased}`)
        }}
        {...a11yProps(index)}
      />
    )
  }

  return (
    <nav id='menu'>
      <MyTabs
        orientation='horizontal'
        value={activeTabIndex}
        onChange={handleTabSwitch}
        aria-label='navigation'>
        {['HOME', 'WORK', 'BLOG', 'MAIL'].map((arrayItem, index) =>
          LinkTab(arrayItem, index)
        )}
      </MyTabs>
    </nav>
  )
}
