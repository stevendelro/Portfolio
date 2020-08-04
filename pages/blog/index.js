import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'

import { getAllPostsForHome } from '../api/contentful'
import FeaturedPost from '../../components/blog/FeaturedPost'
import MainBlogList from '../../components/blog/PostLists/BlogIndexList'
import PageIntro from '../../components/PageIntro'

const useStyles = makeStyles(theme => ({
  blogIndexPage__ROOT: {
    minHeight: '100vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
}))

const pageIntroParagraph = `
I'm an avid writer. Below, you'll find a few pieces that I'm particularly
proud of. Some are centered around coding, others have nothing to
do with code and focus on my thoughts and ideas. All of it, written by me.
`

export default function BlogIndex({ allPosts }) {
  const classes = useStyles()
  const featuredPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const { title, coverImage, date, author, slug, excerpt, stats } = featuredPost

  return (
    <>
      <Head>
        <title>Steven's Blog</title>
        <meta
          property='description'
          content='A personal Blog designed and developed by Steven Del Rosario'
        />
      </Head>
      <div className={classes.blogIndexPage__ROOT}>
        <PageIntro title='Blog' paragraph={pageIntroParagraph} />
        <main>
          {featuredPost && (
            <FeaturedPost
              title={title}
              coverImage={coverImage.url}
              date={date}
              author={author}
              slug={slug}
              excerpt={excerpt}
              readingTime={stats.text}
              titlePosition='right' // this can also be 'left' if needed for different compositions in the future.
            />
          )}
          {morePosts.length > 0 && <MainBlogList posts={morePosts} />}
        </main>
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, allPosts },
  }
}

/**
 * More info on preview mode can be found here:
 * https://nextjs.org/docs/advanced-features/preview-mode#step-2-update-getstaticprops
 */
