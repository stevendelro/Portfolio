import { getSinglePost } from '../api/blog'
import Container from '@material-ui/core/Container'
import parse from 'html-react-parser';

export default function PostDetail({post}) {
  console.log('post',post)
  return (
    <Container>
      {parse(post.html)}
    </Container>
  )
}

export async function getServerSideProps(ctx) {
  const { postSlug } = ctx.query
  const post = await getSinglePost(postSlug)
  return { props: { post } }
}
