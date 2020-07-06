import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
// import VerticalPreview from './'

// const useStyles = makeStyles(theme => ({
//   moreStories: {
//     marginTop: theme.spacing(3),
//   },
// }))

// export default function VerticalPreview({ posts }) {
//   const classes = useStyles()
//   return (
//     <Grid className={classes.moreStories} container direction='row' justify='center' alignItems='center'>
//       <Grid item xs={12} sm={10} lg={8} xl={6}>
//         {posts.map(post => {
//           return (
//             <HorizontalPreview
//               key={post.slug}
//               title={post.title}
//               coverImage={post.coverImage.url}
//               date={post.date}
//               slug={post.slug}
//               excerpt={post.excerpt}
//               readingTime={post.stats.text}
//             />
//           )
//         })}
//       </Grid>
//     </Grid>
//   )
// }


function PostDetailList({posts}) {
  return (
    <div>
      POST DETAIL LIST
    </div>
  )
}

export default PostDetailList

