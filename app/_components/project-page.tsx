'use client'
import { Box, Badge, Link, List, Text } from '@chakra-ui/react'
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
        <Badge ml={2} fontWeight="bold">
          {date.toUpperCase()}
        </Badge>
      </Title>
      <Box bg="gray.200" borderRadius="24px" mt={2}>
        <Box py={6} px={6}>
          <ProjectImage
            src={`http:${thumbnail?.fields?.file?.url}`}
            alt="project.image"
          />
          <Section>
            <Text textStyle="h2">{title}</Text>

            <Text>{abstract}</Text>

            <Box mt={4}>
              <Meta text="Stack" />
              <Text display="inline-block" textStyle="h6">
                {stack}
              </Text>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Text textStyle="h3">What I worked on</Text>
            <List.Root
              css={{
                pl: 5,
                '& li': {
                  listStyleType: 'disc',
                  display: 'list-item'
                }
              }}
            >
              {documentToReactComponents(description)}
            </List.Root>
          </Section>

          <Section delay={0.4}>
            <Text textStyle="h3">Links</Text>
            <List.Root unstyled={true}>
              {url && (
                <List.Item alignItems="center">
                  <Meta text="Website" />
                  {url === 'Coming soon' ? (
                    <Text>Coming soon</Text>
                  ) : (
                    <Link href={url}>
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  )}
                </List.Item>
              )}
              {articleUrl && (
                <List.Item alignItems="center">
                  <Meta text="Article" />
                  <Link href={articleUrl}>
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </List.Item>
              )}
            </List.Root>
          </Section>
        </Box>
      </Box>
    </PageWrapper>
  )
}
