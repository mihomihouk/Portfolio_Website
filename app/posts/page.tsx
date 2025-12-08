import { client } from '../../libs/client'
import { BlogPostSkeleton } from '../../types/contentful'
import { PostsContent } from './PostsContent'

export default async function Posts() {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: 'post'
  })
  return <PostsContent posts={res.items} />
}
