import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'

import { getAllPostsForHome } from '../api/contentful'
import HeroPost from '../../components/blog/FeaturedPost/FeaturedPost'
import MainBlogList from '../../components/blog/Thumbs/MainBlogList'
import PageIntro from '../../components/PageIntro'

const useStyles = makeStyles(theme => ({
  blogIndex__ROOT: {
    minHeight: '100vh',
    backgroundColor:
    theme.palette.type === 'dark'
      ? theme.palette.common.defaultDarkBackground
      : theme.palette.common.defaultLightBackground,
  },
}))

export default function BlogIndex({ allPosts }) {
  const classes = useStyles()
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const heroParagraph = `
  I'm an avid writer. Below, you'll find a few pieces that I'm particularly
  proud of. Some pieces are centered around coding. Otherßs have nothing to
  do with code focus on my thoughts and ideas. All of it was written by me.
  `
  return (
    <>
      <Head>
        <title>Steven's Blog</title>
        <meta property='og:title' content="Steven's Blog" />
      </Head>
      <main className={classes.blogIndex__ROOT}>
      <PageIntro title='Blog' paragraph={heroParagraph} />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage.url}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            readingTime={heroPost.stats.text}
            titlePosition='right'
          />
        )}
        {morePosts.length > 0 && <MainBlogList posts={morePosts} />}
      </main>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, allPosts },
  }
}
