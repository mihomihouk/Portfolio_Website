'use client'

import { Box, SimpleGrid } from '@chakra-ui/react'
import { PageTitle } from '../../components/PageTitle'
import { PageWrapper } from '../_layout/PageWrapper'
import { Projects } from '../../types/contentful'
import { ProjectsList } from '../../features/project/ProjectsList'

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
            <ProjectsList projects={projects} />
          </SimpleGrid>
        </Box>
      </Box>
    </PageWrapper>
  )
}
