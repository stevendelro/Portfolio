import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import PostTitle from '../../components/blog/PostDetail/PostTitle'
import PostHeader from '../../components/blog/PostDetail/PostHeader'
import PostImage from '../../components/blog/PostDetail/PostImage'
import PostBody from '../../components/blog/PostDetail/PostBody'
import MoreStories from '../../components/blog/MoreStories'
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../contentful/api'

export default function PostDetail({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Head>
            <title>Blog | {post.title}</title>
            <meta property='og:image' content={post.coverImage.url} />
          </Head>
          <article>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'>
              <Grid item xs={12} sm={8} lg={6} xl={4}>
                <PostHeader
                  title={post.title}
                  date={post.date}
                  author={post.author}
                  excerpt={post.excerpt}
                  readingTime={post.stats.text}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'>
              <Grid item>
                <PostImage title={post.title} coverImage={post.coverImage} />
              </Grid>
            </Grid>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'>
              <Grid item xs={12} sm={8} lg={6} xl={4}>
                <PostBody content={post.content} />
              </Grid>
            </Grid>
          </article>
          <Divider />
          {morePosts && morePosts.length > 0 && (
            <MoreStories posts={morePosts} />
          )}
        </>
      )}
    </>
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
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  }
}
