'use client'
import {
  Flex,
  Box,
  List,
  IconButton,
  Icon,
  SimpleGrid,
  Image,
  Text
} from '@chakra-ui/react'
import { FaDev } from 'react-icons/fa'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { Section } from '../components/Section'
import { PageWrapper } from './_layout/PageWrapper'
import Link from 'next/link'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectPreview } from '../features/project/ProjectPreview'
import { IconType } from 'react-icons'
import { Projects } from '../types/contentful'
import { Asset } from 'contentful'

type SocialLinkProps = {
  href: string
  icon: IconType
  ariaLabel: string
}
function SocialLink({ href, icon, ariaLabel }: SocialLinkProps) {
  return (
    <Link href={href} target="_blank">
      <IconButton
        variant="ghost"
        colorScheme="orange.500"
        size="lg"
        aria-label={ariaLabel}
      >
        <Icon as={icon} />
      </IconButton>
    </Link>
  )
}

export function HomeContent({
  projects,
  imageURL
}: {
  projects: Projects
  imageURL: string
}) {
  return (
    <PageWrapper>
      <Flex>
        <Box>
          <Box width="100%" mt={3} flexShrink={0} position={{ lg: 'relative' }}>
            <Image
              src={imageURL}
              alt="Profile Image"
              width={{ lg: '70%' }}
              display="block"
              ml="auto"
              borderRadius="20px"
            />
            <Box
              position={{ lg: 'absolute' }}
              top="7%"
              left="3%"
              width={{ lg: '50%' }}
              mt={{ base: '4', lg: 0 }}
            >
              <Text fontSize={['xl', '3xl', '5xl']} fontWeight="bold">
                Hi, I'm Miho.
              </Text>
              <Text fontSize={['xl', '3xl', '5xl']} fontWeight="bold">
                A full-stack engineer based in the UK.
              </Text>
              <Text fontSize={['md', 'xl', '3xl']} fontWeight="bold">
                With 3 years of experience with a unique blend of full-stack
                engineering and UI/UX design expertise, I craft intuitive,
                high-impact digital products.
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box display={'flex'} alignItems="center" mt={4} mb={6} px={2}>
        <List.Root unstyled={true} display={'flex'}>
          <List.Item>
            <SocialLink
              href="https://github.com/mihomihouk"
              icon={IoLogoGithub}
              ariaLabel="My github page"
            />
          </List.Item>
          <List.Item>
            <SocialLink
              href="https://www.linkedin.com/in/miho-inagaki/"
              icon={IoLogoLinkedin}
              ariaLabel="My linkedIn page"
            />
          </List.Item>
          <List.Item>
            <SocialLink
              href="https://dev.to/mihomihouk"
              icon={FaDev}
              ariaLabel="My dev community page"
            />
          </List.Item>
        </List.Root>
      </Box>

      <Box bg="gray.200" borderRadius="24px">
        <Box pt={6} px={6}>
          <Section>
            <SectionHeading title="Project" />
            <SimpleGrid columns={1} gap={6} pt={6}>
              {projects.map(project => {
                // Contentful does not provide support for the types of linked fields so cast it here
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
          </Section>
        </Box>
      </Box>
    </PageWrapper>
  )
}
