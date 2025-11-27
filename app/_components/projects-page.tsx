'use client'

import { Box, SimpleGrid } from '@chakra-ui/react'
import { ProjectGridItem } from '../../components/GridItem'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { PageWrapper } from './page-wrapper'

export function ProjectsPage({ projects }) {
  return (
    <PageWrapper>
      <PageTitle pageTitle="Projects" />
      <Box bg="gray.200" borderRadius="24px" mt={2}>
        <Box py={6} px={6}>
          <SimpleGrid columns={1} gap={6}>
            {projects.map(project => (
              <Section key={project.sys.id}>
                <ProjectGridItem
                  slug={project.fields.slug}
                  title={project.fields.title}
                  thumbnail={project.fields.thumbnail.fields.file}
                >
                  {project.fields.abstract}
                </ProjectGridItem>
              </Section>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </PageWrapper>
  )
}
