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
  console.log(imageURL)
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
            <Image
              blur="true"
              priority
              src={imageURL}
              borderRadius="24px"
              width="516"
              height="687"
            />
          </Box>
          <Stack justifyContent="space-between" w="100%" p={{ base: 4, md: 2 }}>
            <Box pt={18} pl={3} my="auto">
              <Text size="h3">
                Enthusiastic junior web developer with strong motivation to
                tackle challenges, and keen to nurture inspiring and encouraging
                development team.
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
        <Box bg="gray.200" borderRadius="24px" mt={2}>
          <Box py={6} px={6}>
            <Section>
              <Heading as="h3" variant="section-title">
                Curious Adventurist
              </Heading>
              <Text>
                "Knowledge is my Food"ーnothing but this expression can describe
                better about my devotion to learning. Even before starting my
                master's in Anthropology, I traveled abroad from Africa to
                Australia staying with local families to be able to understand
                different ways of being and embracing food.
              </Text>
              <br />
              <Text>
                Then I finally found my best occupation, software engineer,
                where continuously learning new skills is an essential part of
                job. Currently, I am interested in studying Node.js and some
                other backend skills to be a full-stuck engineer in the future.
              </Text>
              <br />
              <Text>
                Not only brings me constant and endless inspirations, my
                enthusiasm has been a positive influence to other people. In
                weekly meetings of Code Lesson, a development project that I am
                currently engaged, I always proactively participate in the
                discussions by asking questions and suggesting possible
                solutions. From other members' feedback, I learned this attitude
                indeed is contributing to improve the quality of the project as
                well as helps team members to be reflective and quickly find
                solutions.
              </Text>
            </Section>
            <Section delay={0.2}>
              <Heading as="h3" variant="section-title">
                Up for Challenges
              </Heading>
              <Text>
                Over the past decade, I have come across many obstacles:
                studying abroad in the UK twice that required intensive English
                learning and acquiring a competitive scholarship; managing a NGO
                office with 12 local staff in Cambodia at young age; having only
                one month to prepare for an entrance exam to get into master
                course in Kyoto University. All of these events helped me grow
                as a human and equipped me with mentality to willingly accept
                and enjoy challenges rather than shy away from them.
              </Text>
              <br />
              <Text>
                This attitude towards hardships became very useful in coding.
                Especially as I chose to be a self-taught developer, making my
                study plan and handling errors were even harder. However,
                through learning code on my own, I learned how to ask other
                people for help as well as stay positive and be patient.
              </Text>
            </Section>
            <Section delay={0.4}>
              <Heading as="h3" variant="section-title">
                Attentive Facilitator
              </Heading>
              <Text>
                Working and living in many different countries such as Cambodia,
                Australia and the UK, I gained a skill to pay attention to
                different needs and opinions of other people.
              </Text>
              <br />
              <Text>
                Also, working as an online Japanese language teacher, I gained
                confidence in keeping other people stay engaged, and assisting
                them in effectively achieving their goals.
              </Text>
              <br />
              <Text>
                After started coding, this facilitation skill has flourished. In
                a team development project, that I joined with 7 other Japanese
                code learners, I became the leader, facilitating its weekly
                meeting, monitoring progress, and helping other members' error
                handling.
              </Text>
              <br />
              <Text>
                Also, via a code-learners community, I have hosted an Agile
                daily stand-up for those who are working on their portfolio
                applications. This is for participants to share their progress
                and problems as well as to help each other to find solutions.
              </Text>
            </Section>
            <Section delay={0.6}>
              <Heading as="h3" variant="section-title">
                Connecting and empowering people
              </Heading>
              <Text>
                Connecting and empowering people are the two filed where I can
                put my talents to best use. In Japan, the UK, Cambodia and
                Australia, I helped institutions and individuals to achieve
                sustainable food production as well as to build inclusive
                communities as a live-in volunteer and as an NGO worker.
              </Text>
              <br />
              <Text>
                In this regard, I believe in the power of software
                engineeringーthe power that can create social spaces beyond
                differences and distance, and that can equip us with means to
                tackle individual and social issues.
              </Text>
              <br />
              <Text>
                During my a-year-long master's in Anthropology of Food at SOAS,
                I conducted Anthropological research on OLIO, a neighbour to
                neighbour food sharing app. Through interviewing with the
                volunteers and users, attending talks from the founders, and
                participating in the food sharing as a user, I learned how
                effectively one mobile app can transform people's awareness
                about food waste, empower them to take actions, and create new
                communities to rely on each other.
              </Text>
            </Section>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default About
