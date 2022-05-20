import {
  Box,
  Image,
  SimpleGrid,
  Stack,
  Button,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
  Heading
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import Layout from '../components/layouts/article'
import SubHeading from '../components/subHeading'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Profile = () => {
  return (
    <Layout>
      <Box width="100%" pt={3}>
        <SubHeading pageTitle="About Me" />
        <SimpleGrid
          borderColor="white"
          borderWidth="1px"
          rounded="lg"
          columns={2}
        >
          <Box display={'flex'}>
            <Image src="/images/profile/second.jpg" rounded="lg" />
          </Box>
          <Stack justifyContent="space-between" w="100%" p={{ base: 4, md: 2 }}>
            <Box pt={18} pl={3}>
              <Text fontSize={20}>
                Enthusiastic junior web developer, keen to build an application
                for better society and to nurture inspiring and encouraging
                development team.
              </Text>
            </Box>
            <Box mr={6} align="right">
              <Link href="/images/cv/mihocv.pdf" download="miho.pdf">
                <Button colorScheme="orange">Get Resume</Button>
              </Link>
            </Box>
          </Stack>
        </SimpleGrid>
        <Box>
          <Section>
            <Text fontSize={20}>Highlights:</Text>
            <List spacing={2} w="100%">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="orange" />
                aaaaaaaaaaaaaaaaaaa
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="orange" />
                aaaaaaaaaaaaaaaaaaa
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="orange" />
                aaaaaaaaaaaaaaaaaaa
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="orange" />
                aaaaaaaaaaaaaaaaaaa
              </ListItem>
            </List>
          </Section>
          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              Bio
            </Heading>
            <BioSection>
              <BioYear>1992</BioYear>
              Born in Tokyo, Japan.
            </BioSection>
            <BioSection>
              <BioYear>1992</BioYear>
              Born in Tokyo, Japan.
            </BioSection>
            <BioSection>
              <BioYear>1992</BioYear>
              Born in Tokyo, Japan.
            </BioSection>
            <BioSection>
              <BioYear>1992</BioYear>
              Born in Tokyo, Japan.
            </BioSection>
            <BioSection>
              <BioYear>1992</BioYear>
              Born in Tokyo, Japan.
            </BioSection>
          </Section>
          <Section>
            <Heading as="h3" variant="section-title">
              Keen on
            </Heading>
            <Paragraph>Food, Music, Politics, Whisky, British Comedy</Paragraph>
          </Section>
        </Box>
      </Box>
    </Layout>
  )
}

export default Profile
