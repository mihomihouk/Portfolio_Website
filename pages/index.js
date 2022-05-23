import NextLink from 'next/link'
import {
  Button,
  Box,
  Heading,
  Text,
  Image,
  Link,
  List,
  ListItem,
  Flex,
  Icon,
  IconButton,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/Layout'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import { client } from '../libs/client'
import { ProjectGridItem } from '../components/Grid-item'

import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import { FaDev } from 'react-icons/fa'

export const getStaticProps = async () => {
  const res = await client.getEntries({
    content_type: 'projects'
  })
  return { props: { projects: res.items } }
}

const Page = ({ projects }) => {
  return (
    <Layout>
      <Flex>
        <Box>
          <Box width="100%" mt={3} flexShrink={0} position="relative">
            <Box position="absolute" top="10%" left="3%" width="50%">
              <Text size="h1">Hi, I'm Miho.</Text>
              <Text size="h1">A Frontend developer based in the UK.</Text>
              <Text size="h3">
                My focus is producing systems and applications for better
                society as well as people-oriented project management.
              </Text>
            </Box>
            <Image
              src="/images/backgrounds/homepage.jpg"
              alt="Profile Image"
              width="70%"
              display="block"
              ml="auto"
              borderRadius="20px"
            />
          </Box>
          <Box mt={5} mx="auto"></Box>
        </Box>
      </Flex>

      <Box display={'flex'} alignItems="center" mt={4} mb={6} px={2}>
        <Box mr={6}>
          <Link href="/images/cv/mihocv.pdf" download="miho.pdf">
            <Button variant="action">Get Resume</Button>
          </Link>
        </Box>
        <List display={'flex'}>
          <ListItem>
            <Link href="https://github.com/mihomihouk">
              <IconButton
                variant="ghost"
                colorScheme="orange.500"
                leftIcon={<Icon as={IoLogoGithub} />}
                size="lg"
              ></IconButton>
            </Link>
          </ListItem>
          <ListItem>
            <NextLink href="https://twitter.com/mihoukmiho">
              <IconButton
                variant="ghost"
                colorScheme="orange.500"
                leftIcon={<Icon as={IoLogoTwitter} />}
                size="lg"
              ></IconButton>
            </NextLink>
          </ListItem>
          <ListItem>
            <Link href="https://dev.to/mihomihouk">
              <IconButton
                variant="ghost"
                colorScheme="orange.500"
                leftIcon={<Icon as={FaDev} />}
                size="lg"
              ></IconButton>
            </Link>
          </ListItem>
        </List>
      </Box>

      <Box bg="gray.200" borderRadius="24px">
        <Box pt={6} px={6}>
          <Section>
            <Heading as="h3" variant="section-title">
              Project
            </Heading>
            <Paragraph>
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
            </Paragraph>
            <Box alignItems="center" pb={5}>
              <NextLink href="/projects">
                <Button
                  rightIcon={<ChevronRightIcon />}
                  variant="action"
                  width="200px"
                >
                  My portfolio
                </Button>
              </NextLink>
            </Box>
          </Section>
        </Box>
      </Box>
    </Layout>
  )
}

export default Page
