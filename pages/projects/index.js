import { Box, SimpleGrid } from '@chakra-ui/react'
import Section from '../../components/Section'
import { ProjectGridItem } from '../../components/GridItem'
import Layout from '../../components/layouts/Layout'
import PageTitle from '../../components/PageTitle'
import { client } from '../../libs/client'

export const getStaticProps = async () => {
  const res = await client.getEntries({
    content_type: 'projects'
  })
  return { props: { projects: res.items }, revalidate: 1 }
}

const Projects = ({ projects }) => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default Projects
