// Steps to add another project:
/**************************************************************************
1. In 'components/work/ProjectInformation.js (here):
  - Create a projectInfo object. See noted below.
  - Add it to projectInformation for export.

2. In 'pages/work/index.js':
  2a. Locate the projectInformation destructured object in the WorkPage function body.
      - Destructure the projectInformation that you just created.
  2b. Add another WorkProject component within the WorkPage return statement.
      - For better visual composition, alternate the orientation of each WorkProject.
      - Pass the projectInformation into WorkProject

3. In `pages/work/[projectDetails].js'
  3a. Locate the useContext hook within ProjectDetailsPage function body and
      destructure out your newly created projectInformation.
  3b. Locate the useEffect hook and add another line that confirms that the 'repo.name'
      matches the Github repository name of your new project, then set the projectInfo.

***************************************************************************/

// Creating a new projectInfo object:
/**************************************************************************
Each projectInfo object must the following keys:

name         ->  Name of the project.
website      ->  Live demo website url for the project.
github       ->  URL to the project's github.
imagePath    ->  Path to image within /public. Use link below to optimize images.
videoPath    ->  Path to video within /public. Quicktime screen record a demo at 1292x920.
summary      ->  A short paragraph. (Under ~250 characters)
keyFeatures  ->  A short paragraph. (Under ~250 characters)
technologies ->  A short paragraph. (Under ~250 characters)

Optimize Media:
  images: https://tinypng.com/
  - Don't use .webp images, as they wont display on Safari for iPhone (as of 8/1/2020)

  video: https://apps.apple.com/us/app/smart-converter/id447513724?mt=12
  - Smart converter is a free app from the MacOS App Store
  - Use the 'iPad Pro' option to convert videos to mp4.
***************************************************************************/

const weathernautInfo = {
  name: 'Weathernaut',
  website: 'https://weathernaut.now.sh',
  github: 'https://github.com/stevendelro/Weathernaut',
  imagePath: '/projectMedia/weathernaut.png',
  videoPath: '/projectMedia/weathernaut.mp4',
  summary: `
    Weathernaut converts location names into coordinates, then it uses
    those coordinates to fetch current weather data for that location. Built on
    the NextJS React framework, Weathernaut is serverside rendered and fast.
  `,
  keyFeatures: `
    With permission, geolocation can be utilized to automatically fetch local
    weather. Weather data will persist after page refreshes. Typos and misspellings
    are automatically handled by Mapbox when retrieving coordinates.
  `,
  technologies: `
    Custom styled Material UI components. Recharts display the chart data.
    WebGL-powered React suite for displaying the map. And, of course, the
    entire app has been built on the lightning fast NextJS React framework.
  `,
}

const portfolioInfo = {
  name: 'Portfolio',
  website: 'https://www.stevenlives.com',
  github: 'https://github.com/stevendelro/Portfolio',
  imagePath: '/projectMedia/portfolio.png',
  videoPath: '/projectMedia/portfolio.mp4',
  summary: `
    Built with React and NextJS, everything page on within this site is either
    server side rendered or automatically generated as static HTML + JSON.
  `,
  keyFeatures: `
    The Work section uses the GitHub API as a psuedo CMS by using the readme
    files for each project as that project's details page. The Blog section is wired
    up with the Contentful CMS. All markdown is rendered via a custom-made markdown
    renderer.
  `,
  technologies: `
    I used Material UI for styles and their theming system. PrismJS was configured with
    my own syntax highlighting theme. Formik and SendGrid handle the contact form in Mail.
    I've also rewritten most of the Material UI styles in my own implementation of Markdown-to-JSX.
  `,
}

// Add new projects here:
export const projectInformation = {
  weathernautInfo,
  portfolioInfo,
}
