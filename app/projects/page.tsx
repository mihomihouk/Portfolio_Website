import { client } from '../../libs/client'
import { ProjectsContent } from './projects-content'

export default async function Projects() {
  const projects = await client.getEntries({
    content_type: 'projects'
  })
  return <ProjectsContent projects={projects.items} />
}
