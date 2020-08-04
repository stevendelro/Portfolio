import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Head from 'next/head'

import { DevelopDark, DevelopLight } from '../../components/svg/Develop'
import PageIntro from '../../components/PageIntro'
import Project from '../../components/work/Project'

const useStyles = makeStyles(theme => ({
  WorkPage__ROOT: {
    minHeight: '100vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  workPage__container: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
    },
  },
  workPage__image: {
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  project: {
    padding: theme.spacing(50),
  },
}))

/**********************************
 ********** PAGE SETUP ************
 **********************************/

const workPageIntro = `
This section is reserved for projects that I'm proud of. The project
details come straight from the public README.md that's hosted on
Github. I figure that this would be the best way to keep this portfolio
up to date, while motivating me to make better writeups.
`

/*    Project Component API

<Project
  orientation=        String -> 'imageLeft' || 'imageRight' - This only affects composition on large screens.
  projectInfo=        Object -> Each key in this object contains the following Strings:
    projectInfo.name         ->  Name of the project.
    projectInfo.imagePath    ->  Path to image within /public.
    projectInfo.github       ->  URL to the project's github.
    projectInfo.gitusername  ->  The name of the repository. This will also be the slug used in the url and NavCrumbs.
    projectInfo.summary      ->  A short paragraph. (Under 250 characters)
    projectInfo.keyFeatures  ->  A short paragraph. (Under 250 characters)
    projectInfo.technologies ->  A short paragraph. (Under 250 characters)
/>
*/

/**********************************
 ******* WEATHERNAUT SETUP ********
 **********************************/

export const weathernautInfo = {
  name: 'Weathernaut',
  imagePath: '/weathernaut.webp',
  website: 'https://weathernaut.now.sh',
  github: 'https://github.com/stevendelro/Weathernaut',
  gitUsername: 'stevendelro',
  summary: `
    This weather app converts location names into coordinates, then it uses
    those coordinates to fetch current weather data for that location. Styled
    with Material UI and written in React with hooks.
  `,
  keyFeatures: `
    Upon page load, the app will ask permission to utilize the browser's
    Geolocation API. If approved, it will automatically fetch weather data.
    It's also responsive across all screen widths.
  `,
  technologies: `
    Styled with Material UI. Recharts display chart data. Icons purchased from
    Lance Snider. Built within the NextJS React Framework.
  `,
}

export default function WorkPage() {
  const classes = useStyles()
  const theme = useTheme()
  const type = theme.palette.type
  const isDarkMode = type === 'dark' ? true : false
  return (
    <>
      <Head>
        <title>Work | Projects</title>
        <meta
          property='description'
          content='A collection of projects developed by Steven Del Rosario'
        />
      </Head>
      <main className={classes.WorkPage__ROOT}>
        <PageIntro title='Work' paragraph={workPageIntro} />
        <Container className={classes.workPage__container} maxWidth='lg'>
          <Container maxWidth='md' className={classes.workPage__image}>
            {isDarkMode ? <DevelopDark /> : <DevelopLight />}
          </Container>
          <Project orientation='imageLeft' projectInfo={weathernautInfo} />
        </Container>
      </main>
    </>
  )
}
