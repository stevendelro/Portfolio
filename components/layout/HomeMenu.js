import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import NextLink from 'next/link'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'
import Logo from './Logo'

function a11yProps(tabIndex) {
  return {
    id: `vertical-tab-${tabIndex}`,
    'aria-controls': `vertical-tabpanel-${tabIndex}`,
  }
}

const logoColor = '#144d53'

function HomeMenu({
  drawerWidth,
  setAppBarTitle,
  mobileOpen,
  handleDrawerToggle,
}) {
  const router = useRouter()
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const handleTabSwitch = (event, selectedTabIndex) => {
    event.preventDefault()
    setActiveTabIndex(selectedTabIndex)
  }

  // Ensure the current viewed page has the correct tab active
  // Without these statements, on refresh the active tab will always be 0.
  if (router.pathname === '/' && activeTabIndex !== 0) {
    setActiveTabIndex(0)
  }
  if (router.pathname === '/work' && activeTabIndex !== 1) {
    setActiveTabIndex(1)
  }
  if (router.pathname === '/blog' && activeTabIndex !== 2) {
    setActiveTabIndex(2)
  }
  if (router.pathname === '/mail' && activeTabIndex !== 3) {
    setActiveTabIndex(3)
  }

  function LinkTab(props) {
    return (
      <Tab
        component='a'
        onClick={event => {
          event.preventDefault()
          switch (props.label) {
            case 'home':
              router.push(`/`)
              mobileOpen && handleDrawerToggle()
              setAppBarTitle("Steven's Portfolio  ")
              break
            case 'work':
              router.push(`/${props.label}`)
              mobileOpen && handleDrawerToggle()
              setAppBarTitle('Projects')
              break
            case 'blog':
              router.push(`/${props.label}`)
              mobileOpen && handleDrawerToggle()
              setAppBarTitle('Thoughts')
              break
            case 'mail':
              router.push(`/${props.label}`)
              mobileOpen && handleDrawerToggle()
              setAppBarTitle('Contact')
              break
          }
        }}
        {...props}
      />
    )
  }

  const useStyles = makeStyles(theme => ({
    listItem: {
      textAlign: 'center',
    },
    toolbar: theme.mixins.toolbar,
    drawerLogo: {
      marginBottom: '-64px',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    tab: {
      minWidth: drawerWidth,
      '& > span': {
        transition: 'all .2s ease-in-out',
        '&:hover': { transform: 'scale(1.1)' },
      },
    },
  }))
  const classes = useStyles()
  return (
    <>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item className={classes.drawerLogo}>
          <Logo height='30px' width='30px' color={logoColor} />
        </Grid>
      </Grid>
      <div className={classes.toolbar} />
      <Tabs
        orientation='vertical'
        value={activeTabIndex}
        onChange={handleTabSwitch}
        aria-label='home menu tabs'
        className={classes.tabs}>
        <LinkTab className={classes.tab} label='home' {...a11yProps(0)} />
        <LinkTab className={classes.tab} label='work' {...a11yProps(1)} />
        <LinkTab className={classes.tab} label='blog' {...a11yProps(2)} />
        <LinkTab className={classes.tab} label='mail' {...a11yProps(3)} />
      </Tabs>
    </>
  )
}

export default HomeMenu
