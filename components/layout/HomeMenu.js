import { useState } from 'react'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'
import Logo from './Logo'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const logoColor = '#144d53'

function HomeMenu({
  drawerWidth,
  setAppBarTitle,
  mobileOpen,
  handleDrawerToggle,
}) {
  const [value, setValue] = useState(0)
  const router = useRouter()
  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
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
        value={value}
        onChange={handleChange}
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
