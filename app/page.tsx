import { HomePage } from './_components/home-page'
import { client } from '../libs/client'

export default async function Page() {
  const projects = await client.getEntries({
    content_type: 'projects'
  })
  const firstView = await client.getAsset('4dcMYwy4p2BmoHGlGwcCHa')
  const imageURL = `https:${firstView.fields.file.url}`
  return <HomePage projects={projects.items} imageURL={imageURL} />
}
