import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ButtonBase from '@material-ui/core/ButtonBase'
import { makeStyles } from '@material-ui/core/styles'
import Logo from './Logo'

function a11yProps(tabIndex) {
  return {
    id: `vertical-tab-${tabIndex}`,
    'aria-controls': `vertical-tabpanel-${tabIndex}`,
  }
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawerLogo: {
    marginBottom: '-64px',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    fontSize: '1.5rem',
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
      <Tab
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
    <>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item className={classes.drawerLogo}>
          <Link href='/'>
            <ButtonBase disableRipple>
              <Logo height='30px' width='30px' />
            </ButtonBase>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.toolbar} />
      <Tabs
        orientation='vertical'
        value={activeTabIndex}
        onChange={handleTabSwitch}
        aria-label='home menu tabs'
        className={classes.tabs}
        centered>
        {['HOME', 'WORK', 'BLOG', 'MAIL'].map((arrayItem, index) =>
          LinkTab(arrayItem, index)
        )}
      </Tabs>
    </>
  )
}

export default HomeMenu
