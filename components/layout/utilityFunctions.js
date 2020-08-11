export const removeDashesAndUppercaseFirstLetter = slug => {
  const replacedDashesWithSpaces = slug.replace(/-/g, ' ')
  const upperCasedFirstLetters = replacedDashesWithSpaces
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  return upperCasedFirstLetters
}

export function truncate(phrase, numberToKeep) {
  let array, keptWords
  array = phrase.split(' ')
  if (array.length <= numberToKeep) return phrase
  keptWords = array
    .slice(0, array.length - (array.length - numberToKeep))
    .toString()
    .replace(/,/g, ' ')
  return `${keptWords}...`
}
