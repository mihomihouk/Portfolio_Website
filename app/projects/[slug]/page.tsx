import { client } from '../../../libs/client'
import { ProjectsSkeleton } from '../../../types/contentful'
import { ProjectContent } from './ProjectContent'

export async function generateStaticParams() {
  const projects = await client.getEntries<ProjectsSkeleton>({
    content_type: 'projects'
  })
  return projects.items.map(project => ({ slug: project.fields.slug }))
}

export default async function Project({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await client.getEntries<ProjectsSkeleton>({
    content_type: 'projects',
    limit: 1,
    'fields.slug': slug
  })

  return <ProjectContent project={project.items[0]} />
}
