import {
  Box,
  Image,
  SimpleGrid,
  Stack,
  Button,
  Text,
  Link,
  Heading
} from '@chakra-ui/react'
import Layout from '../components/layouts/Layout'
import PageTitle from '../components/PageTitle'

import Section from '../components/Section'
import Paragraph from '../components/Paragraph'

const About = () => {
  return (
    <Layout>
      <Box width="100%" pt={3}>
        <PageTitle pageTitle="About" />
        <SimpleGrid
          borderColor="white"
          borderWidth="1px"
          rounded="lg"
          columns={2}
          bg="orange.500"
          borderRadius="24px"
        >
          <Box display={'flex'}>
            <Image src="./images/abouts/anthropology.JPG" rounded="24px" />
          </Box>
          <Stack justifyContent="space-between" w="100%" p={{ base: 4, md: 2 }}>
            <Box pt={18} pl={3} my="auto">
              <Text size="h3">
                Enthusiastic junior web developer, keen to build an application
                for better society and to nurture inspiring and encouraging
                development team.
              </Text>
            </Box>
            <Box mr={6} align="right" p={2}>
              <Link href="/images/cv/mihocv.pdf" download="miho.pdf">
                <Button bg="white" color="orange">
                  Get Resume
                </Button>
              </Link>
            </Box>
          </Stack>
        </SimpleGrid>
        <Box bg="gray.200" borderRadius="24px" mt={2}>
          <Box py={6} px={6}>
            <Section>
              <Heading as="h3" variant="section-title">
                Software Development
              </Heading>
              <Paragraph>
                <Text>Food, Music, Politics, Whisky, British Comedy</Text>
              </Paragraph>
            </Section>
            <Section delay={0.2}>
              <Heading as="h3" variant="section-title">
                Up for Challenges
              </Heading>
              <Paragraph>
                <Text>Food, Music, Politics, Whisky, British Comedy</Text>
              </Paragraph>
            </Section>
            <Section delay={0.4}>
              <Heading as="h3" variant="section-title">
                Towards Humanity
              </Heading>
              <Paragraph>
                <Text>Food, Music, Politics, Whisky, British Comedy</Text>
              </Paragraph>
            </Section>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default About
