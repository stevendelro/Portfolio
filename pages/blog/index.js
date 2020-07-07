import Head from 'next/head'
import PageIntro from '../../components/PageIntro'
import HeroPost from '../../components/blog/HeroPost/HeroPost'
import MainBlogList from '../../components/blog/PostPreviewLists/MainBlogList'
import { getAllPostsForHome } from '../../contentful/api'

export default function BlogIndex({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
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
          readingTime={heroPost.stats.text}
          titlePosition='right'
        />
      )}
      {morePosts.length > 0 && <MainBlogList posts={morePosts} />}
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, allPosts },
  }
}
