import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import PostTitle from '../../components/blog/SlugPage/PostTitle'
import PostHeader from '../../components/blog/SlugPage/PostHeader'
import PostImage from '../../components/blog/SlugPage/PostImage'
import PostBody from '../../components/blog/SlugPage/PostBody'
import SlugPageList from '../../components/blog/PostPreviewLists/SlugPageList'
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../contentful/api'

const useStyles = makeStyles(theme => ({
  rootSlugPage: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
}))

export default function SlugPage({ post, morePosts, preview }) {
  const classes = useStyles()
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
          <article id='SlugPage' className={classes.rootSlugPage}>
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
          <article id='SlugPageList' className={classes.rootSlugPage}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'>
              <Grid item xs={12} sm={8} xl={4}>
                {morePosts && morePosts.length > 0 && (
                  <SlugPageList posts={morePosts} />
                )}
              </Grid>
            </Grid>
          </article>
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
