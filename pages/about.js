import {
  Box,
  SimpleGrid,
  Stack,
  Button,
  Text,
  Link,
  Heading
} from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/Layout'
import PageTitle from '../components/PageTitle'
import { client } from '../libs/client'
import { Section } from '../components/Section'

export const getStaticProps = async () => {
  const contentful = require('contentful')
  const firstView = await client.getAsset('4pOuhvWFjuBUkseHNzUFZO')
  const resume = await client.getAsset('6M0PJpY5tR1HkSBAPhLKPd')
  return {
    props: {
      imageURL: `https:${firstView.fields.file.url}?r=24&bg=rgb:DD6B20`,
      resumeURL: `https:${resume.fields.file.url}`
    }
  }
}

const About = ({ imageURL, resumeURL }) => {
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
          style={{ borderRadius: '24px' }}
        >
          <Box display={'flex'}>
            <Image
              blur="true"
              priority
              src={imageURL}
              style={{ borderRadius: '24px' }}
              width="516"
              height="687"
            />
          </Box>
          <Stack justifyContent="space-between" w="100%" p={{ base: 4, md: 2 }}>
            <Box pt={18} pl={3} my="auto">
              <Text fontSize={['sm', 'xl', '3xl']} fontWeight="bold">
                Enthusiastic junior full-stack developer with strong motivation
                to tackle challenges, and keen to nurture goal-oriented and
                supportive development team.
              </Text>
            </Box>
            <Box mr={6} align="right" p={2}>
              <Link
                style={{ textDecoration: 'none' }}
                href={resumeURL}
                target="_blank"
              >
                <Button bg="white" color="orange">
                  Get Resume
                </Button>
              </Link>
            </Box>
          </Stack>
        </SimpleGrid>
        <Box bg="gray.200" style={{ borderRadius: '24px' }} mt={2}>
          <Box py={6} px={6}>
            <Section>
              <Heading as="h3" variant="section-title">
                High motivation & consistency
              </Heading>
              <Text>
                "Knowledge is my Food" ー nothing but this expression can
                describe better about my devotion to learning. Though I joined
                Subly as a frontend engineer, I'm now regularly working for the
                backend as well. This is the result of my continuous endeavour
                to push my boundaries both at and outside of work in order to
                learn new skills as quickly as possible. Over the last eight
                months, I've contributed to a number of bug-fix and feature
                development, which involves designing and creating UI, reusable
                components, and endpoints, writing tests and preparing
                migration. Constantly updating a list of skills to learn as well
                as learning code in every morning before work has become my
                habit, which has helped me to offer better solutions to a wide
                range of challenges we come across in a fast-paced work
                environment. This eagerness to learn and consistency has been
                infectious to my entire company - I was officially selected as
                "the most passionate employee in 2022" at Subly.
              </Text>
            </Section>
            <Section delay={0.2}>
              <Heading as="h3" variant="section-title">
                Collaboration & communication
              </Heading>
              <Text>
                Working and living in different parts of the world has
                cultivated my unparalleled attention to diverse perspectives and
                my ability to balance conflicting opinions. My communication
                skills have been sharpened further through working remotely for
                a small team at Subly. Actively engaging with peer review and
                jumping on bug-fix as well as taking the lead to set up office
                days are the things I prioritize in order to build stronger team
                bonds and to promote a supportive work environment. Beyond the
                dev team, I also maintain close communication with the head of
                marketing to keep up with the company's changing strategies.
                I've found having openness, constructive discussions and
                supportive relationships inside a team are the keys to higher
                job satisfaction and higher productivity amongst the workers.
              </Text>
            </Section>
            <Section delay={0.4}>
              <Heading as="h3" variant="section-title">
                Think big & think ahead
              </Heading>
              <Text>
                As a former research student in Anthropology, I'm good at paying
                attention to both big and small pictures. I often found that
                having enough exposure to up-to-date knowledge about my
                company's roadmap and marketing data is just as important as
                day-to-day coding. The context has helped me quickly and
                accurately understand "why" we need to develop the features that
                we're working on, and "which" task should be prioritized. Also,
                I always think ahead. Before starting to code, I try to identify
                design flaws and possible technical challenges, and, if
                necessary, I don't hesitate to give others feedback. I believe
                this small process often saves huge amount of time that would be
                otherwise spent on writing unnecessary codes.
              </Text>
            </Section>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default About
