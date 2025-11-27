import { client } from '../../libs/client'
import { ProjectsPage } from '../_components/projects-page'

export default async function Projects() {
  const projects = await client.getEntries({
    content_type: 'projects'
  })
  return <ProjectsPage projects={projects.items} />
}
