import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Head from 'next/head'

import { getRepositoryNamesForPaths, getProjectDetails } from '../api/github'
import Body from '../../components/work/ProjectDetailsPage/Body'
import Header from '../../components/work/ProjectDetailsPage/Header'
import Image from '../../components/work/ProjectDetailsPage/Image'

const useStyles = makeStyles(theme => ({
  rootProjectDetailsPage: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  header: {
    padding: theme.spacing(2),
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(0),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 3, 0, 3),
    },
  },
  body: {
    padding: theme.spacing(3),
  },
}))

export default function ProjectDetailsPage({ markdown, repo, user }) {
  const classes = useStyles()
  console.log('getStaticProps: markdown', markdown)
  console.log('getStaticProps: repo', repo)
  console.log('getStaticProps: user', user)
  return (
    <>
      <h1>placeholder</h1>
      
    </>
  )
}
export async function getStaticProps({ params }) {
  const username = params.projectDetails[0]
  const repository = params.projectDetails[1]
  const { markdown, repo, user } = await getProjectDetails(username, repository)

  return {
    props: { markdown, repo, user },
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
