'use client'
import { Box, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/Project'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Section } from '../../components/Section'
import { PageWrapper } from './page-wrapper'

export function ProjectPage({ project }) {
  const {
    title,
    date,
    thumbnail,
    abstract,
    stack,
    description,
    url,
    articleUrl
  } = project.fields

  return (
    <PageWrapper>
      <Title>
        {title}
        <Badge ml={2}>{date}</Badge>
      </Title>
      <Box bg="gray.200" borderRadius="24px" mt={2}>
        <Box py={6} px={6}>
          <ProjectImage
            src={`http:${thumbnail?.fields?.file?.url}`}
            alt="project.image"
          />
          <Section>
            <Text size="h2">{title}</Text>

            <Text>{abstract}</Text>

            <Box mt={4}>
              <Meta>Stack</Meta>
              <Text display="inline-block" size="h6">
                {stack}
              </Text>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Text size="h3">What I worked on</Text>
            <Box pl={5}>{documentToReactComponents(description)}</Box>
          </Section>

          <Section delay={0.4}>
            <Text size="h3">Links</Text>
            <List>
              {url && (
                <ListItem>
                  <Meta>Website</Meta>
                  {url === 'Coming soon' ? (
                    <Text>Coming soon</Text>
                  ) : (
                    <Link href={url}>
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  )}
                </ListItem>
              )}
              {articleUrl && (
                <ListItem>
                  <Meta>Article</Meta>
                  <Link href={articleUrl}>
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </ListItem>
              )}
            </List>
          </Section>
        </Box>
      </Box>
    </PageWrapper>
  )
}
