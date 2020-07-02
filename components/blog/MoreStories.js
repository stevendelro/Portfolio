
function MoreStories() {
  return (
    <section>
      <h2>
        More Stories
      </h2>
      <div>
        {posts.map(post => {
          return (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage.url}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          )
        })}
      </div>
    </section>
  )
}

export default MoreStories
