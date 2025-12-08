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
import { ProjectGridItem } from '../components/GridItem'
import { Section } from '../components/Section'
import { PageWrapper } from './_layout/page-wrapper'
import Link from 'next/link'
import { SectionHeading } from '../components/SectionHeading'

function SocialLink({ href, icon }) {
  return (
    <Link href={href} target="_blank">
      <IconButton
        variant="ghost"
        colorScheme="orange.500"
        size="lg"
        aria-label={icon}
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
  projects: any
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
            />
          </List.Item>
          <List.Item>
            <SocialLink
              href="https://www.linkedin.com/in/miho-inagaki/"
              icon={IoLogoLinkedin}
            />
          </List.Item>
          <List.Item>
            <SocialLink href="https://dev.to/mihomihouk" icon={FaDev} />
          </List.Item>
        </List.Root>
      </Box>

      <Box bg="gray.200" borderRadius="24px">
        <Box pt={6} px={6}>
          <Section>
            <SectionHeading title="Project" />
            <SimpleGrid columns={1} gap={6} pt={6}>
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
          </Section>
        </Box>
      </Box>
    </PageWrapper>
  )
}
