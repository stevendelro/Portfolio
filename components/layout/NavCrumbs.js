import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'

import { removeDashesAndUppercaseFirstLetter, truncate } from './utils/index'
import MuiLink from '../MuiLink'

const useStyles = makeStyles(theme => ({
  NavCrumbs__crumbLink: {
    '&:hover': {
      textDecoration: 'none',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.secondary.main,
    },
  },
}))

export default function NavBreadCrumbs() {
  const theme = useTheme()
  const classes = useStyles()
  const darkMode = theme.palette.type
  const { route, query } = useRouter()
  const [secondCrumb, setSecondCrumb] = useState(null)
  const [thirdCrumb, setThirdCrumb] = useState(null)

  const createSecondLevelCrumb = route => {
    if (route === '/work') return setSecondCrumb('Work')
    if (route === '/mail') return setSecondCrumb('Mail')
    if (route === '/blog' || '/blog/[slug]') return setSecondCrumb('Blog')
  }

  const createCrumbLink = string => {
    const lowerCased = string.toLowerCase()
    return (
      <MuiLink
        className={classes.NavCrumbs__crumbLink}
        color={darkMode === 'light' ? 'primary' : 'secondary'}
        href={`/${lowerCased === 'home' ? '' : lowerCased}`}>
        <Typography variant='caption' display='block'>
          {string}
        </Typography>
      </MuiLink>
    )
  }

  useEffect(() => {
    if (route === '/') return setSecondCrumb(null)
    if (route === '/work' || '/blog' || '/mail') {
      setThirdCrumb(null)
      createSecondLevelCrumb(route)
    }
    if (route === '/blog/[slug]') {
      createSecondLevelCrumb(route)
      let currentSlug = removeDashesAndUppercaseFirstLetter(query.slug)
      if (thirdCrumb === null || currentSlug !== thirdCrumb) {
        setThirdCrumb(truncate(currentSlug, 5))
      }
    }
  }, [route, query])
  return (
    <section id='NavCrumbs'>
      <Breadcrumbs aria-label='breadcrumb'>
        {createCrumbLink('Home')}
        {secondCrumb && createCrumbLink(secondCrumb)}
        {thirdCrumb && createCrumbLink(thirdCrumb)}
      </Breadcrumbs>
    </section>
  )
}
