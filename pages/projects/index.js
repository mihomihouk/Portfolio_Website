import { Container, SimpleGrid } from '@chakra-ui/react'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/article'
import SubHeading from '../../components/subHeading'
import { client } from '../../libs/client'

export const getStaticProps = async () => {
  const res = await client.getEntries({
    content_type: 'projects'
  })
  return { props: { projects: res.items } }
}

const Projects = ({ projects }) => {
  return (
    <Layout>
      <Container pt={3}>
        <SubHeading pageTitle="projects" />
        <SimpleGrid columns={1} gap={6}>
          {projects.map(project => (
            <Section key={project.sys.id}>
              <WorkGridItem
                slug={project.fields.slug}
                title={project.fields.title}
                thumbnail={project.fields.thumbnail.fields.file}
              >
                {project.fields.abstract}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
