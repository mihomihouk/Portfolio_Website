'use client'
import { Box, SimpleGrid, Stack, Text, List, ListItem } from '@chakra-ui/react'
import { client } from '../../libs/client'
import { Section } from '../../components/Section'
import { PageWrapper } from '../_layout/PageWrapper'
import { PageTitle } from '../../components/PageTitle'
import Image from 'next/image'
import { SectionHeading } from '../../components/SectionHeading'

export const getStaticProps = async () => {
  const firstView = await client.getAsset('4pOuhvWFjuBUkseHNzUFZO')
  return {
    props: {
      imageURL: `https:${firstView.fields.file.url}?r=24&bg=rgb:DD6B20`
    }
  }
}

function BulletList({ items }) {
  return (
    <List.Root
      gap={3}
      unstyled={false}
      pl={5}
      css={{
        '& li::marker': {
          color: 'black'
        }
      }}
    >
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List.Root>
  )
}

export function AboutContent({ imageURL }) {
  return (
    <PageWrapper>
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
              priority
              src={imageURL}
              style={{ borderRadius: '24px' }}
              width="516"
              height="687"
              alt="Profile Image"
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
              <SectionHeading title="Multi-skilled" />
              <BulletList
                items={[
                  '3 years’ experience in small, cross-functional teams have shaped me into a versatile, multi-skilled developer who can contribute across the product lifecycle',
                  'End-to-end expertise: defining features, researching and selecting technologies, performing code reviews, frontend & backend development, E2E testing, and crafting intuitive UI/UX',
                  'UI/UX skills: design wireframes and mockups in Figma, develop scalable design systems, and bridge gaps between design and engineering teams to ensure cohesive products',
                  'Project management: translate abstract feature requests into actionable tasks, provide data-driven suggestions while balancing deadlines and resources, and gather user feedback to drive product improvements'
                ]}
              />
            </Section>
            <Section delay={0.4}>
              <SectionHeading title="Committed to Outcomes" />
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
              <SectionHeading title="Team Player" />
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
    </PageWrapper>
  )
}
