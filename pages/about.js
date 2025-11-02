import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  List,
  ListItem
} from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/Layout'
import PageTitle from '../components/PageTitle'
import { client } from '../libs/client'
import { Section } from '../components/Section'

export const getStaticProps = async () => {
  const firstView = await client.getAsset('4pOuhvWFjuBUkseHNzUFZO')
  return {
    props: {
      imageURL: `https:${firstView.fields.file.url}?r=24&bg=rgb:DD6B20`
    }
  }
}

const BulletList = ({ items }) => {
  return (
    <List spacing={3} styleType="disc" pl={5}>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  )
}

const About = ({ imageURL }) => {
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
                Design, develop, deliver — with purpose and impact.
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
        <Box bg="gray.200" style={{ borderRadius: '24px' }} mt={2}>
          <Box py={6} px={6}>
            <Section>
              <Heading as="h3" variant="section-title">
                Multi-skilled
              </Heading>
              <BulletList
                items={[
                  '3 years’ experience in small, cross-functional teams have shaped me into a versatile, multi-skilled developer who can contribute across the product lifecycle',
                  'End-to-end expertise: defining features, researching and selecting technologies, performing code reviews, frontend development, E2E testing, and crafting intuitive UI/UX',
                  'UI/UX skills: design wireframes and mockups in Figma, develop scalable design systems, and bridge gaps between design and frontend teams to ensure cohesive products',
                  'Project management: translate abstract feature requests into actionable tasks, provide data-driven suggestions while balancing deadlines and resources, and gather user feedback to drive product improvements'
                ]}
              />
            </Section>
            <Section delay={0.4}>
              <Heading as="h3" variant="section-title">
                Committed to Outcomes
              </Heading>
              <BulletList
                items={[
                  'More than a programmer — I ensure that every feature and solution aligns with both short- and long-term business goals',
                  'Continuously communicate progress with team members and stakeholders, keeping everyone aligned',
                  'Pivot plans when necessary, making optimal decisions that balance competing priorities and realistic resource constraints',
                  'Stay focused on impact and results, aware of the fast-moving and competitive nature of the tech industry'
                ]}
              />
            </Section>
            <Section delay={0.2}>
              <Heading as="h3" variant="section-title">
                Team Player
              </Heading>
              <BulletList
                items={[
                  'Create productive and efficient teams by fostering inclusive environments where all voices are valued, encouraging team members to point out mistakes and make suggestions without hesitation',
                  'Leverage unique experiences in charities and anthropological research to bridge gaps in knowledge and perspectives, guiding teams toward shared goals',
                  'Proactively share technical insights and discoveries to uplift the team and accelerate collective learning'
                ]}
              />
            </Section>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default About
