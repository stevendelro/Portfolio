import { request } from '@octokit/request'
import { createTokenAuth } from '@octokit/auth'

const auth = createTokenAuth(process.env.GITHUB_ACCESS_TOKEN)

// Set token for authenticated requests
const requestWithAuth = request.defaults({
  headers: {
    authorization: process.env.GITHUB_ACCESS_TOKEN,
  },
  request: {
    hook: auth.hook,
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

const getMarkdown = async (username, repository) => {
  const { data } = await requestWithAuth('GET /repos/:user/:repo/readme', {
    user: username,
    repo: repository,
  })
  const buffer = new Buffer.from(data.content, 'base64')
  const markdown = buffer.toString('ascii')
  return markdown
}

const getRepoInfo = async (username, repository) => {
  const { data } = await requestWithAuth('GET /repos/:user/:repo', {
    user: username,
    repo: repository,
  })

  const repoInfo = {
    id: data.id,
    name: data.name,
    description: data.description,
    lastUpdated: data.updated_at,
    dateCreated: data.created_at,
    website: data.homepage,
    github: data.html_url,
  }
  return repoInfo
}

const getUserInfo = async username => {
  const { data } = await requestWithAuth('GET /users/:user', {
    user: username,
  })
  const userInfo = {
    id: data.id,
    fullname: data.name,
    location: data.location,
    avatar: data.avatar_url,
  }
  return userInfo
}

export const getProjectDetails = async (username, repository) => {
  const markdown = await getMarkdown(username, repository)
  const repo = await getRepoInfo(username, repository)
  const user = await getUserInfo(username)
  return { markdown, repo, user }
}
