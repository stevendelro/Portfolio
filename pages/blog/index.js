import Head from 'next/head'
import Divider from '@material-ui/core/Divider'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import PageIntro from '../../components/PageIntro'
import HeroPost from '../../components/blog/HeroPost/HeroPost'
import MoreStories from '../../components/blog/MoreStories'
import { getAllPostsForHome } from '../../contentful/api'

export default function BlogIndex({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.only('xs'))

  const heroParagraph = `I'm an avid writer. Below, you'll find a few
  pieces that I'm particularly proud of. If you care to understand my
  thought process, check out a few posts and let me know what you think.`

  return (
    <>
      <Head>
        <title>Steven's Blog</title>
        <meta property='og:title' content="Steven's Blog" />
      </Head>
      <PageIntro title='Blog' paragraph={heroParagraph} />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage.url}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          titlePosition='right'
        />
      )}
      {isSmallScreen && <Divider style={{ margin: '2rem' }} />}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, allPosts },
  }
}
