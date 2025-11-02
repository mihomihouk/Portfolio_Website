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
import { Section } from '../components/Section'
import { client } from '../libs/client'
import { ProjectGridItem } from '../components/GridItem'

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { FaDev } from 'react-icons/fa'

export const getStaticProps = async () => {
  const res = await client.getEntries({
    content_type: 'projects'
  })
  const firstView = await client.getAsset('4dcMYwy4p2BmoHGlGwcCHa')
  return {
    props: {
      projects: res.items,
      imageURL: `https:${firstView.fields.file.url}`
    },
    revalidate: 1
  }
}

const Page = ({ projects, imageURL }) => {
  return (
    <Layout>
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
              priority="true"
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
                A frontend developer based in the UK.
              </Text>
              <Text fontSize={['md', 'xl', '3xl']} fontWeight="bold">
                With 3 years of experience with a unique blend of frontend
                engineering and UI/UX design expertise, I craft intuitive,
                high-impact digital products.
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box display={'flex'} alignItems="center" mt={4} mb={6} px={2}>
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
            <Link href="https://www.linkedin.com/in/miho-inagaki/">
              <IconButton
                variant="ghost"
                colorScheme="orange.500"
                leftIcon={<Icon as={IoLogoLinkedin} />}
                size="lg"
              ></IconButton>
            </Link>
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
            <Box alignItems="center" pb={5}>
              <NextLink href="/projects" passHref>
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
