import { client } from '../../libs/client'
import { ProjectsContent } from './ProjectsContent'

export default async function Projects() {
  const projects = await client.getEntries({
    content_type: 'projects'
  })
  return <ProjectsContent projects={projects.items} />
}
