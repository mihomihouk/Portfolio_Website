import { Box, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/Project'
import Paragraph from '../../components/Paragraph'
import Layout from '../../components/layouts/Layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { client } from '../../libs/client'
import Section from '../../components/Section'

export const getStaticPaths = async () => {
  const projects = await client.getEntries({
    content_type: 'projects'
  })
  const paths = projects.items.map(product => ({
    params: {
      slug: product.fields.slug
    }
  }))
  return {
    fallback: false,
    paths
  }
}

export const getStaticProps = async context => {
  const project = await client.getEntries({
    content_type: 'projects',
    limit: 1,
    'fields.slug': context.params.slug
  })
  return {
    props: { ...project?.items?.[0]?.fields },
    revalidate: 1
  }
}

const Project = props => {
  return (
    <Layout title="code-lesson">
      <Title>
        {props.title}
        <Badge ml={2}>{props.date}</Badge>
      </Title>
      <Box bg="gray.200" borderRadius="24px" mt={2}>
        <Box py={6} px={6}>
          <ProjectImage
            src={`http:${props.thumbnail.fields.file.url}`}
            alt="project.image"
          />
          <Section>
            <Paragraph>
              <Text size="h2">{props.title}</Text>
              <Text>{props.abstract}</Text>
            </Paragraph>
            <Box ml={4} my={4} display="flex" align="center">
              <Meta>Stack</Meta>
              <Text display="inline-block" size="h6">
                {props.stack}
              </Text>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Paragraph>
              <Text size="h3">What I worked on</Text>
              <Text pl={6}>{documentToReactComponents(props.description)}</Text>
            </Paragraph>
          </Section>

          <Section delay={0.4}>
            <Paragraph>
              <Text size="h3">Links</Text>
              <List>
                <ListItem>
                  <Meta>Website</Meta>
                  <Link href={props.url}>
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Meta>GitHub</Meta>
                  <Link href={props.github}>
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </ListItem>
                {props.articleUrl && (
                  <ListItem>
                    <Meta>Article</Meta>
                    <Link href={props.articleUrl}>
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </ListItem>
                )}
              </List>
            </Paragraph>
          </Section>
        </Box>
      </Box>
    </Layout>
  )
}

export default Project
