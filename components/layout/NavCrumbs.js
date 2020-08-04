import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'

import { removeDashesAndUppercaseFirstLetter, truncate } from './utils/index'
import MuiLink from '../MuiLink'

const useStyles = makeStyles(theme => ({
  navCrumbs__crumbLink: {
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
}))

export default function NavCrumbs() {
  const theme = useTheme()
  const classes = useStyles()
  const darkMode = theme.palette.type
  const { route, query } = useRouter()
  const [secondCrumb, setSecondCrumb] = useState(null)
  const [thirdCrumb, setThirdCrumb] = useState(null)

  const createSecondLevelCrumb = route => {
    switch (route) {
      case '/mail':
        setSecondCrumb('Mail')
        break
      case '/work':
        setSecondCrumb('Work')
        break
      case '/work/[projectDetails]':
        setSecondCrumb('Work')
        break
      case '/blog':
        setSecondCrumb('Blog')
        break
      case '/blog/[slug]':
        setSecondCrumb('Blog')
        break
      default:
        setSecondCrumb(null)
        break
    }
  }

  const createCrumbLink = string => {
    const lowerCased = string.toLowerCase()
    return (
      <MuiLink
        className={classes.navCrumbs__crumbLink}
        aria-labelledby='navCrumbs'
        color={darkMode === 'light' ? 'primary' : 'secondary'}
        href={`/${lowerCased === 'home' ? '' : lowerCased}`}>
        <Typography variant='caption' display='block'>
          {string}
        </Typography>
      </MuiLink>
    )
  }

  useEffect(() => {
    // Handle first crumb, clean up second and third crumbs
    if (route === '/') return setSecondCrumb(null)
    if (route === '/work' || '/blog' || '/mail') {
      setThirdCrumb(null)
      createSecondLevelCrumb(route)
    }

    // Handle second and third crumb for Blog routes
    if (route === '/blog/[slug]') {
      createSecondLevelCrumb(route)
      let currentSlug = removeDashesAndUppercaseFirstLetter(query.slug)
      if (thirdCrumb === null || currentSlug !== thirdCrumb) {
        setThirdCrumb(truncate(currentSlug, 5))
      }
    }

    // Handle second and third crumb for Work routes
    if (route === '/work/[projectDetails]') {
      createSecondLevelCrumb(route)
      let currentProject = removeDashesAndUppercaseFirstLetter(
        query.projectDetails
      )
      if (thirdCrumb === null || currentProject !== thirdCrumb) {
        setThirdCrumb(truncate(currentProject, 5))
      }
    }
  }, [route, query])

  return (
    <section id='navCrumbs'>
      <Breadcrumbs aria-label='navigationLinkGroup'>
        {createCrumbLink('Home')}
        {secondCrumb && createCrumbLink(secondCrumb)}
        {thirdCrumb && createCrumbLink(thirdCrumb)}
      </Breadcrumbs>
    </section>
  )
}
