import axios from 'axios'
import { getRepositoryNamesForPaths } from '../api/github'

export default function ProjectDetailsPage({ username, repository }) {
  return (
    <div>
      <h1>Username: {username}</h1>
      <h2>Reponame: {repository}</h2>
    </div>
  )
}
export async function getStaticProps({ params }) {
  const { projectDetails } = params
  return {
    props: {
      repository: projectDetails[1],
      username: projectDetails[0],
    },
  }
}

export async function getStaticPaths() {
  const { paths, githubUsername } = await getRepositoryNamesForPaths()
  return {
    paths:
      paths?.map(
        repositoryName => `/work/${githubUsername}/${repositoryName}`
      ) ?? [],
    fallback: true,
  }
}
