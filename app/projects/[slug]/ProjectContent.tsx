'use client'
import { Box, Heading, List, Text, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Section } from '../../../components/Section'
import { PageWrapper } from '../../_layout/PageWrapper'
import { Badge } from '../../../components/Badge'
import { PageTitle } from '../../../components/PageTitle'
import { SectionHeading } from '../../../components/SectionHeading'

export function ProjectContent({ project }) {
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
        <Badge
          color="gray"
          ml={2}
          fontWeight="bold"
          text={date.toUpperCase()}
        />
      </Title>
      <Box bg="gray.200" borderRadius="24px" mt={2}>
        <Box py={6} px={6}>
          <ProjectImage
            src={`http:${thumbnail?.fields?.file?.url}`}
            alt="project.image"
          />
          <Section>
            <PageTitle pageTitle={title}/>

            <Text>{abstract}</Text>

            <Box mt={4}>
              <Meta text="Stack" />
              <Text display="inline-block">
                {stack}
              </Text>
            </Box>
          </Section>
          <Section delay={0.2}>
            <SectionHeading title="What I worked on" />
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
            <SectionHeading title='Links'/>
            <List.Root unstyled={true}>
              {url && (
                <List.Item alignItems="center">
                  <Meta text="Website" />
                  {url === 'Coming soon' ? (
                    <Text>Coming soon</Text>
                  ) : (
                    <Link href={url} target='_blank'>
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

function Title({ children }) {
  return (
    <Box mt={2}>
      <Link href="/projects" passHref>
        Projects
      </Link>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

function ProjectImage({ src, alt }) {
  return <Image borderRadius="24px" w="full" src={src} alt={alt} mb={4} />
}

function Meta({ text }) {
  return (
    <Badge color="orange" mr={2} fontWeight="bold" text={text.toUpperCase()} />
  )
}
