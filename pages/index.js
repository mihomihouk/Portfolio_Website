import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import { FaDev } from 'react-icons/fa'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box width="100%" mt={3} flexShrink={0}>
          <Image
            src="/images/backgrounds/homepage.png"
            alt="Profile Image"
            width="100%"
          />
        </Box>
        <Box mt={4}>
          <p>
            I&apos;m an ambitious web developer. My focus is producing systems
            and applications for better society as well as people-oriented
            project management.
          </p>
        </Box>
        <Box display={'flex'} alignItems="center" mt={4} mb={6}>
          <Box mr={6}>
            <Link href="/images/cv/mihocv.pdf" download="miho.pdf">
              <Button variant="action">Get Resume</Button>
            </Link>
          </Box>
          <List display={'flex'}>
            <ListItem>
              <Link href="https://github.com/mihomihouk">
                <Button
                  variant="ghost"
                  colorScheme="orange.500"
                  leftIcon={<Icon as={IoLogoGithub} />}
                ></Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/mihoukmiho">
                <Button
                  variant="ghost"
                  colorScheme="orange.500"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                ></Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://dev.to/mihomihouk">
                <Button
                  variant="ghost"
                  colorScheme="orange.500"
                  leftIcon={<Icon as={FaDev} />}
                ></Button>
              </Link>
            </ListItem>
          </List>
        </Box>

        <Section>
          <Heading as="h3" variant="section-title">
            Project
          </Heading>
          <Paragraph>
            Write my description.Write my description.Write my description.Write
            my description.Write my description.Write my description.Write my
            description.Write my description.Write my description.Write my
            description.Write my description.Write my description.Write my
            description.Write my description.Write my description.Write my
            description.Write my description.Write my description {''}
            <NextLink href="#">
              <Link>AAAA</Link>
            </NextLink>
            .
          </Paragraph>
          <Box alignItems="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} variant="action">
                My portfolio
              </Button>
            </NextLink>
          </Box>
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
      </Container>
    </Layout>
  )
}

export default Page
