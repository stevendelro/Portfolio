import GhostContentAPI from '@tryghost/content-api'
const key = process.env.API_KEY
const api = new GhostContentAPI({
  url: 'https://stevenlives.com',
  key: key,
  version: 'v3'
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}
