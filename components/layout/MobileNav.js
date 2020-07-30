import { makeStyles, withStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined'

const useStyles = makeStyles({
  MobileNav__root: {
    width: '100vw',
    top: 'auto',
    bottom: 0,
  },
})

// Custom bottom nav button styles to accomodate darkMode styles
const MyBottomNavAction = withStyles(theme => ({
  root: {
    transition: theme.transitions.create(['color', 'padding-top'], {
      duration: theme.transitions.duration.short,
    }),
    padding: '6px 12px 8px',
    minWidth: 64,
    color: theme.palette.text.secondary,
    '&$selected': {
      paddingTop: 6,
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },
  },
  /* Pseudo-class applied to the root element if selected. */
  selected: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  },
  /* Pseudo-class applied to the root element if `showLabel={false}` and not selected. */
  iconOnly: {},
  /* Styles applied to the label's span element. */
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    '&$selected': {
      fontSize: theme.typography.pxToRem(14),
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },
  },
}))(props => <BottomNavigationAction {...props} />)

export default function MobileNav({ darkMode, setDarkMode }) {
  const classes = useStyles()
  const router = useRouter()
  const { pathname } = router
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [lightDarkLabel, setLightDarkLabel] = useState(
    darkMode ? 'Dark' : 'Light'
  )

  const NavLink = (label, index) => {
    const lowerCased = label.toLowerCase()
    let icon
    switch (lowerCased) {
      case 'home':
        icon = <AccountCircleOutlinedIcon />
        break
      case 'work':
        icon = <WorkOutlineOutlinedIcon />
        break
      case 'light':
        icon = <WbIncandescentOutlinedIcon />
        break
      case 'dark':
        icon = <WbIncandescentIcon />
        break
      case 'blog':
        icon = <LibraryBooksOutlinedIcon />
        break
      case 'mail':
        icon = <MailOutlineOutlinedIcon />
        break
      default:
        break
    }

    // Ensure proper tag is active on page refresh
    pathname === '/' && activeTabIndex !== 0 && setActiveTabIndex(0)
    pathname === '/work' && activeTabIndex !== 1 && setActiveTabIndex(1)
    pathname === '/blog' && activeTabIndex !== 3 && setActiveTabIndex(3)
    pathname === '/mail' && activeTabIndex !== 4 && setActiveTabIndex(4)

    return (
      <MyBottomNavAction
        key={index}
        component='a'
        label={label}
        icon={icon}
        onClick={event => {
          event.preventDefault()
          if (lowerCased === 'light') {
            setLightDarkLabel('Dark')
            return
          }
          if (lowerCased === 'dark') {
            setLightDarkLabel('Light')
            return
          }
          router.push(`/${lowerCased === 'home' ? '' : lowerCased}`)
        }}
      />
    )
  }

  return (
    <nav id='MobileNav'>
      <AppBar className={classes.MobileNav__root} position='fixed'>
        <BottomNavigation
          value={activeTabIndex}
          onChange={(event, selectedOption) => {
            event.preventDefault()
            setActiveTabIndex(selectedOption)
            selectedOption === 2 && setDarkMode(!darkMode)
          }}
          showLabels={false}>
          {[
            'Home',
            'Work',
            lightDarkLabel,
            'Blog',
            'Mail',
          ].map((arrayItem, index) => NavLink(arrayItem, index))}
        </BottomNavigation>
      </AppBar>
    </nav>
  )
}
