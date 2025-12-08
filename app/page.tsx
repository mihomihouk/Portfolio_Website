import { HomeContent } from './HomeContent'
import { client } from '../libs/client'
import { ProjectsSkeleton } from '../types/contentful'

export default async function Page() {
  const projects = await client.getEntries<ProjectsSkeleton>({
    content_type: 'projects'
  })
  const heroImage = await client.getAsset('4dcMYwy4p2BmoHGlGwcCHa')

  // This image field always have file so use ! assertion
  const imageURL = `https:${heroImage.fields.file!.url}`
  return <HomeContent projects={projects.items} imageURL={imageURL} />
}
