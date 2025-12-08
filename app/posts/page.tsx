import { client } from '../../libs/client'
import { PostsContent } from './PostsContent'

export default async function Posts() {
  const res = await client.getEntries({
    content_type: 'post'
  })

  return <PostsContent posts={res.items} />
}
