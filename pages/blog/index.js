import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import { getAllPostsForHome } from '../../contentful/api'
import HeroPost from '../../components/blog/HeroPost'
import MoreStories from '../../components/blog/MoreStories'

export default function BlogIndex({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>Steven's Blog</title>
        <meta property='og:title' content="Steven's Blog" />
      </Head>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage.url}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <Divider style={{ margin: '2rem'}}/>
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
