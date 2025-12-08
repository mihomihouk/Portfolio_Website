import { client } from '../../libs/client'
import { ProjectsSkeleton } from '../../types/contentful'
import { ProjectsContent } from './ProjectsContent'

export default async function Projects() {
  const projects = await client.getEntries<ProjectsSkeleton>({
    content_type: 'projects'
  })
  return <ProjectsContent projects={projects.items} />
}
