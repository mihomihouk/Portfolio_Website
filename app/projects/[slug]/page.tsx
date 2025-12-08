import { client } from '../../../libs/client'
import { ProjectContent } from './project-content'

export async function generateStaticParams() {
  const projects = await client.getEntries({
    content_type: 'projects'
  })
  return projects.items.map((project: any) => ({ slug: project?.fields?.slug }))
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const project = await client.getEntries({
    content_type: 'projects',
    limit: 1,
    'fields.slug': (await params).slug
  })

  return <ProjectContent project={project.items[0]} />
}
