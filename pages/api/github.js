import { request } from '@octokit/request'

// Set token for authenticated requests
const requestWithAuth = request.defaults({
  headers: {
    authorization: process.env.GITHUB_ACCESS_TOKEN,
  },
})

export const getRepositoryNamesForPaths = async () => {
  // Extract the data object from response object
  const { data } = await requestWithAuth('GET /users/:user/repos', {
    // request data from a single user
    user: process.env.GITHUB_USERNAME,
  })
  // Create an array of repo objects from the data object.
  const arrayOfRepos = Object.keys(data).map(key => ({
    // Each object will have a key: 'repo', the value for that key will be an object containing all data for a single repo.
    repo: data[key],
  }))
  // Map over arrayOfRepos to extract repo names, place them in the array: 'paths'.
  const paths = arrayOfRepos.map(item => item.repo.name)
  return {
    paths,
    githubUsername: process.env.GITHUB_USERNAME,
  }
}
