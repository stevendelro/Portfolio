import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import {
  removeDashesAndUppercaseFirstLetter,
  createCrumbLink,
  createSecondLevelCrumb,
} from './utils/index'

export default function NavBreadCrumbs() {
  const { route, query } = useRouter()
  const [secondCrumb, setSecondCrumb] = useState(null)
  const [thirdCrumb, setThirdCrumb] = useState(null)

  useEffect(() => {
    if (route === '/') return setSecondCrumb(null)

    if (route === '/work' || '/blog' || '/mail') {
      setThirdCrumb(null)
      setSecondCrumb(createSecondLevelCrumb(route))
    }

    if (route === '/blog/[slug]') {
      const currentSlug = removeDashesAndUppercaseFirstLetter(query.slug)
      setSecondCrumb(createSecondLevelCrumb(route))
      if (thirdCrumb === null || currentSlug !== thirdCrumb) {
        setThirdCrumb(createCrumbLink(currentSlug))
      }
    }
  }, [route, query])

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      {createCrumbLink('Home')}
      {secondCrumb}
      {thirdCrumb}
    </Breadcrumbs>
  )
}
