import Typography from '@material-ui/core/Typography'
import MuiLink from '../../MuiLink'

export const removeDashesAndUppercaseFirstLetter = slug => {
  const replacedDashesWithSpaces = slug.replace(/-/g, ' ')
  const upperCasedFirstLetters = replacedDashesWithSpaces
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  return upperCasedFirstLetters
}

export const createCrumbLink = string => {
  const lowerCased = string.toLowerCase()
  return (
    <MuiLink
      color='inherit'
      href={`/${lowerCased === 'home' ? '' : lowerCased}`}>
      <Typography variant='caption' display='block'>
        {string}
      </Typography>
    </MuiLink>
  )
}

export const createSecondLevelCrumb = route => {
  if (route === '/blog' || '/blog/[slug]') return createCrumbLink('Blog')
  if (route === '/work') return createCrumbLink('Work')
  if (route === '/mail') return createCrumbLink('Mail')
}
