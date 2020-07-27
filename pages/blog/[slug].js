import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import Container from '@material-ui/core/Container'
import ErrorPage from 'next/error'
import Grid from '@material-ui/core/Grid'
import Head from 'next/head'

import { getPostAndMorePosts, getAllPostsWithSlug } from '../api/contentful'
import PostBody from '../../components/blog/PostDetailsPage/PostBody'
import PostHeader from '../../components/blog/PostDetailsPage/PostHeader'
import PostImage from '../../components/blog/PostDetailsPage/PostImage'
import PostTitle from '../../components/blog/PostDetailsPage/PostTitle'
import PreviewAlert from '../../components/blog/PreviewAlert'
import PostDetailsPageList from '../../components/blog/Thumbs/PostDetailsPageList'

const useStyles = makeStyles(theme => ({
  rootPostDetailsPage: {
    minHeight: '100vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  header: {
    padding: theme.spacing(2),
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(0),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 3, 0, 3),
    },
  },
  body: {
    padding: theme.spacing(3),
  },
}))

export default function PostDetailsPage({ post, morePosts, preview }) {
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
          <article id='PostDetailsPage' className={classes.rootPostDetailsPage}>
            {preview ? <PreviewAlert /> : null}
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'>
              <Grid
                className={classes.header}
                item
                xs={12}
                sm={8}
                lg={6}
                xl={4}>
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
              <Grid
                item
                className={classes.body}
                xs={12}
                sm={10}
                md={8}
                lg={6}
                xl={4}>
                <PostBody content={post.content} />
              </Grid>
            </Grid>
          </article>
          <article
            id='PostDetailsPageList'
            className={classes.rootPostDetailsPage}>
            <Container>
              {morePosts && morePosts.length > 0 && (
                <PostDetailsPageList posts={morePosts} />
              )}
            </Container>
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
      preview, // For Contentful to preview draft with page styles before publishing.
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

/**
 * More info on preview mode can be found here:
 * https://nextjs.org/docs/advanced-features/preview-mode#step-2-update-getstaticprops
 */
