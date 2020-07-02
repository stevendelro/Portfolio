import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import {
  getStaticProps,
  getPostAndMorePosts,
  getAllPostsWithSlug,
} from '../../contentful/api'
import PostTitle from '../../components/blog/PostTitle'
import PostHeader from '../../components/blog/PostHeader'
import PostBody from '../../components/blog/PostBody'
import MoreStories from '../../components/blog/MoreStories'

export default function PostDetail({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      <h1>PostDetail.js</h1>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | Steven's Blog</title>
              <meta property='og:image' content={post.coverImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
          <Divider />
          {morePosts && morePosts.length > 0 && (
            <MoreStories posts={morePosts} />
          )}
        </>
      )}
    </Container>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
