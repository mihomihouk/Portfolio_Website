'use client'

import { Box, SimpleGrid } from '@chakra-ui/react'
import { ProjectPreview } from '../../features/project/ProjectPreview'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { PageWrapper } from '../_layout/PageWrapper'
import { Projects } from '../../types/contentful'
import { Asset } from 'contentful'

type ProjectsContentProps = {
  projects: Projects
}
export function ProjectsContent({ projects }: ProjectsContentProps) {
  return (
    <PageWrapper>
      <PageTitle pageTitle="Projects" />
      <Box bg="gray.200" borderRadius="24px" mt={2}>
        <Box py={6} px={6}>
          <SimpleGrid columns={1} gap={6}>
            {projects.map(project => {
              const thumbnail = project.fields.thumbnail as Asset
              return (
                <Section key={project.sys.id}>
                  <ProjectPreview
                    slug={project.fields.slug}
                    title={project.fields.title}
                    thumbnail={thumbnail.fields.file}
                  >
                    {project.fields.abstract}
                  </ProjectPreview>
                </Section>
              )
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </PageWrapper>
  )
}
