import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import PostTitle from '../../components/blog/SlugPage/PostTitle'
import PostHeader from '../../components/blog/SlugPage/PostHeader'
import PostImage from '../../components/blog/SlugPage/PostImage'
import PostBody from '../../components/blog/SlugPage/PostBody'
import SlugPageList from '../../components/blog/Thumbs/SlugPageList'
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../contentful/api'

const useStyles = makeStyles(theme => ({
  rootSlugPage: {
    // height: 'auto',
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
              <Grid item className={classes.body} xs={12} sm={10} md={8} lg={6} xl={4}>
                <PostBody content={post.content} />
              </Grid>
            </Grid>
          </article>
          <article id='SlugPageList' className={classes.rootSlugPage}>
            <Container>
              {morePosts && morePosts.length > 0 && (
                <SlugPageList posts={morePosts} />
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
