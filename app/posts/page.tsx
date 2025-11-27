import { client } from '../../libs/client'
import { PostsPage } from '../_components/posts-page'

export default async function Posts() {
  const res = await client.getEntries({
    content_type: 'post'
  })

  return <PostsPage posts={res.items} />
}
