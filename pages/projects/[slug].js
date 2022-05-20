import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import * as contentful from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { client } from '../../libs/client'

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
  return { props: { ...project?.items?.[0]?.fields } }
}

const Work = props => {
  console.log(props)
  return (
    <Layout title="code-lesson">
      <Container pt={6}>
        <Title>
          {props.title}
          <Badge>{props.date}</Badge>
        </Title>
        <WorkImage
          src={`http:${props.thumbnail.fields.file.url}`}
          alt="project.image"
        />
        <Paragraph>{props.abstract}</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href={props.url}>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>{props.stack}</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href={props.github}>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <Paragraph>{documentToReactComponents(props.description)}</Paragraph>
      </Container>
    </Layout>
  )
}

export default Work
