## Table of Contents

- [About The Project](#project-history)
  - [Thought Process](#thought-process)
    - [What should I style it with?](#what-should-i-style-it-with?)
    - [What should it look like?](#what-should-it-look-like?)
    - [Choosing a Content Management System.](#choosing-a-content-management-system.)
    - [What should the blog look like?](#what-should-the-blog-look-like?)
    - [Styling Markdown data](#styling-markdown-data)
    - [Syntax Highlighting with PrismJS](#syntax-highlighting-with-prismjs)
    - [Using the Github API as a psuedo CMS](#using-the-github-api-as-a-psuedo-csm-to-showcase-my-projects.)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About the project

I had just completed the final iteration of [Weathernaut](https://www.stevenlives.com/work/Weathernaut), which was the first time I've implementned NextJS into one of my projects. While developing the weather app, NextJS 9.3 was relased—and with it, the ability to opt-in for Static Site Generation on a page-by-page basis.

Stoked, I decided that it was time to build a new portfolio.

## Thought Process

#### What should I style it with?

Was I going to continue using Material UI? Should I pivot and work with the ever interesting and highly alluring Tailwind CSS?

On one hand, I've just spent the past two projects working with Material UI, so my eyes and mind were used to navigating their documentation. I can see how powerful it can be if I could somehow manage to wrap my head around truly customizing their components and implementing their theming system. There was so much room to grow and learn, that I'd be a fool to not take it all the way.

Regardless, I wanted to dive deeper into Tailwind CSS to see if there was something that could convince me otherwise. I soon discovered why the utility-first CSS framework was becoming so popular. The thing is, I'm a newbie developer and I haven't spent countless hours fighting against a CSS framework in order to get things looking the way I want them to.

So, the number one problem that Tailwind would solve for me was a non-issue. I haven't had enough experience in developing end-user UI where I needed to gain more granular control.

One thing that Tailwind CSS didn't have, *that Material UI had in spades*, was access to all the source code on how to implement all the different components. I'm so glad that I chose Material-UI over Tailwind because reading their source code exposed me to better ways to approach my code.

Deciphering how the data flows through the components, seeing how other components are utilized within other components, and the countless examples of DRY code had a huge impact on how I developed this entire project.

Similar to the idea that learning a high-level language first can make learning a lower-level language easier, Material-UI's documentation influenced me and exposed me to a more expereinced way to write my code.

#### What should it look like?

This was tough. I had no clue how I wanted the portfolio to look and feel. I jotted down a few ideas:

* It should me distracting. The focus should be on the content, not the site.
* It needs to be neutral, but not boring.
* It needed to be simple, but not plain.
* It has to look different from my past projects.
* I want to take full advantage of the theming system, so it's gotta have dark mode.
* Within a minute, someone should be able to navigate and quickly view the entire site.

I decided to do some research. I scoured over a ton of different portfolios, most of them from graphic designers, or advanced UI/UX developers. None of them really felt like anything that I was leaning towards. Until, I found this dude's site: [https://adamwathan.me/](https://adamwathan.me/)

Full featured, concise, simple, and timeless. It looked fairly easy to create—and most importantly—it wasn't distracting.

#### Choosing a Content Management System.

Before working on the portfolio, I wanted to create a space where I could place all my writing. Putting two and two together, I figured that a blog would be the perfect thing to take advantage of NextJS's Static Site Generation.

I had just discovered [Notion](notion.so) and was thoroughly impressed. Unfortunately, they didn't have a public API that I could use to get my data from them, so that idea was nixed. Undeterred, I spent some time looking through NextJS's documentation, more specifically, their examples and implementation section.

There was a new section that was entirely dedicated towards building NextJS applications with popular CMS's. From that list, the names that popped out at me were Contentful, Sanity, Prismic, Strapi and Ghost. (Technically, Ghost is a blogging platform, not a CMS. They had an API that I could use, so why not add it to the list? ) Starting from the top, I wanted to spend an hour on each CMS to see if any of them felt better to me than the others.

Well, after the first hour of wrapping my head around Contentful, I was pretty content. Honestly, I was just too lazy to spend my day really making an educated desicion. I headed over to [npmtrends.com](https://www.npmtrends.com) and compared the CMS's:

![](https://arbletur.sirv.com/Images/trends.png)

Contentful was the clear winner, plus if I ever wanted to freelance, I felt confident that I could create a site for someone with Contentful, and they would be able to manage their site's content fairly easily.

#### What should the blog look like?

Creating the blog was the cornerstone of this entire project.

I had implemented a personal site before with [Ghost](https://ghost.org/) and really loved their design. The visual composition of images to text and how they layed out their blog post pages just felt right. They really hit the nail on the head on the look and feel on with their Casper theme. You'll be able to see a ton of similarities with my blog and this [Casper Demo](https://demo.ghost.io/).

Also, I wanted to incorporate some features that I liked from [Medium](https://medium.com/). In particular, I like how medium felt light and airy. They kept the use of dividers and borders to a minimum. I also liked how all posts had an estimated reading time.

#### Styling Markdown data

With a little more research, I began to notice that many people are creating personal blogs where blog posts were nothing more than markdown files. I liked that too, so I set up Contentful to send over markdown files. After getting everything wired up, I was confronted with the challenge on how to style the markdown.

So, I went to Material UI's Github page to sift through the Issues tab in hopes that someone had already solved this problem. To my good fortune, I found [this comment](https://github.com/mui-org/material-ui/issues/12290#issuecomment-453930042):

![](https://arbletur.sirv.com/Images/markdownRenderer.png)

Sweet. Armed with this little tid-bit of information, I decided to use `markdown-to-jsx` in conjunction with the Material UI's [markdown component](https://github.com/mui-org/material-ui/blob/master/docs/src/modules/components/MarkdownElement.js.) for their documentation.

#### Syntax Highlighting with PrismJS

I've got everything wired up and working. I have the markdown parsed and styled the way I liked it. There was only one thing left: code blocks.

This was going to be my personal blog, and I intended to explain a ton of coding realted material in the future. Having proper syntax highlighting was an absolute must. After another round of research, narrowed down my choices to either [HighlightJs](https://highlightjs.org/) or [PrismJs](https://prismjs.com/).

I was able to get HighlightJS working in almost no time, but their color themes weren't something to be admired in my opinion. Instead of settling for something that works but looks like crap, I got stuck in a black hole for about two days trying to wrap my head around implementing PrismJS.

Once I got it to work, I spent another two days tweaking around with my Markdown Renderer component to get things looking exactly like the theme my code editor has. I learned about tokens and bunch of stuff that I never knew before. The final result was well worth it.

Here's a snippet from my NavCrumbs.js component:

```jsx

  useEffect(() => {
    // Handle first crumb, clean up second and third crumbs
    if (route === '/') return setSecondCrumb(null)
    if (route === '/work' || '/blog' || '/mail') {
      setThirdCrumb(null)
      createSecondLevelCrumb(route)
    }

    // Handle second and third crumb for Blog routes
    if (route === '/blog/[postDetails]') {
      createSecondLevelCrumb(route)
      let currentSlug = removeDashesAndUppercaseFirstLetter(query.postDetails)
      if (thirdCrumb === null || currentSlug !== thirdCrumb) {
        setThirdCrumb(truncate(currentSlug, 5))
      }
    }

    // Handle second and third crumb for Work routes
    if (route === '/work/[projectDetails]') {
      createSecondLevelCrumb(route)
      let currentProject = removeDashesAndUppercaseFirstLetter(
        query.projectDetails
      )
      if (thirdCrumb === null || currentProject !== thirdCrumb) {
        setThirdCrumb(truncate(currentProject, 5))
      }
    }
  }, [route, query])
```

If you're viewing this on GitHub, of course you aren't going to see the correct syntax highlighting. Head over to: https://stevenlives.com/work/Portfolio if you're interested to see how it came out. Having said that, this leads me to my next topic:

#### Using the Github API as a psuedo CMS to showcase my projects.

I struggled to come up with what I should do with my Work page.

But, after spending so much time on my markdown renderer component for my Blog page, the idea smacked me right in the face. Each project has a README<span></span>.md, which means I could parse that markdown with my markdown renderer. On top of that, my portfolio would stay up to date anytime I updated the README<span></span>.md for each project.

Not only would my portfolio always be up to date, but I now had extra incentive to make better README<span></span>.md's for every project that I create in the future. I'm also cutting way back on having to create an entire different project for my Work page just to display my projects.

It was perfect. This idea really excited me and propelled me to drive the project home.

## Built With


- [NextJS](https://nextjs.org) -- An opinionated create-react-app
- [ReactJS](https://reactjs.org) -- A Javascript library for building user interfaces.
- [Material UI](https://material-ui.com) -- A React component-based design system.
- [Contentful CMS](https://www.contentful.com/) -- t’s the modern way to manage content: Control all content from a single hub.
- [Formik](https://formik.org/) -- An open source form library for React and React Native.
- [SendGrid](https://sendgrid.com/) -- Send emails with Javascript
- [PrismJS](https://prismjs.com/) -- Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
- [Undraw.co](https://undraw.co/) -- Open source illustrations. Similar to unsplash, but with vector art.
- [octokit/request](https://github.com/octokit/request.js) -- Send parameterized requests to GitHub’s APIs with sensible defaults in browsers and Node
- [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx) -- The most lightweight, customizable React markdown component.
- [reading-time](https://github.com/ngryman/reading-time) -- Estimates how long an article will take to read. It works perfectly with plain text, but also with markdown or html.
- [yup](https://github.com/jquense/yup) -- A JavaScript schema builder for value parsing and validation.
- [axios](https://github.com/axios/axios) -- Promise based HTTP client for the browser and node.js
- [uuid](https://github.com/uuidjs/uuid) -- For the creation of RFC4122 UUIDs. Used for mapped list items.


## Getting Started

*under construction*

### Prerequisites

*under construction*

### Installation

*under construction*

## Usage

*under construction*

## Roadmap

*under construction*

## License

Do whatever you want with it.

## Contact

Steven Del Rosario - [@steveDelRosario](https://twitter.com/stevenDelRosario) - stevendelro@pm.me

Project Link: [https://github.com/stevendelro/Weathernaut](https://github.com/stevendelro/Weathernaut)

## Acknowledgements

> These resources helped me immensely while developing this project.

- [Codevolution](https://www.youtube.com/c/Codevolution/) -- Youtube
- [Sirv](https://sirv.com/) -- This was the image CDN hosting provider that I used to host images and gifs.
- [TinyPNG](https://tinypng.com/) -- Smart PNG and JPEG compression.
- [SmartConverter](https://apps.apple.com/us/app/smart-converter/id447513724?mt=12) -- The fastest, easiest to use video converter on the App Store
- [Ghost's Casper Theme](https://demo.ghost.io/) -- The primary inspiration for the design of my blog.
