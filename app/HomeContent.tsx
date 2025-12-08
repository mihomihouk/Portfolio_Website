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
import { Section } from '../components/Section'
import { PageWrapper } from './_layout/page-wrapper/PageWrapper'
import Link from 'next/link'
import { SectionHeading } from '../components/SectionHeading'
import { IconType } from 'react-icons'
import { Projects } from '../types/contentful'
import { ProjectsList } from '../features/project/ProjectsList'

export function HomeContent({
  projects,
  imageURL
}: {
  projects: Projects
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
              <HeroText large>Hi, I'm Miho.</HeroText>
              <HeroText large>A software engineer based in the UK.</HeroText>
              <HeroText>
                With 3+ years of experience with a unique blend of full-stack
                engineering and UI/UX design expertise, I craft intuitive,
                high-impact digital products.
              </HeroText>
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
              ariaLabel="My github page"
            />
          </List.Item>
          <List.Item>
            <SocialLink
              href="https://www.linkedin.com/in/miho-inagaki/"
              icon={IoLogoLinkedin}
              ariaLabel="My linkedIn page"
            />
          </List.Item>
          <List.Item>
            <SocialLink
              href="https://dev.to/mihomihouk"
              icon={FaDev}
              ariaLabel="My dev community page"
            />
          </List.Item>
        </List.Root>
      </Box>

      <Box bg="gray.200" borderRadius="24px">
        <Box pt={6} px={6}>
          <Section>
            <SectionHeading title="Project" />
            <SimpleGrid columns={1} gap={6} pt={6}>
              <ProjectsList projects={projects} />
            </SimpleGrid>
          </Section>
        </Box>
      </Box>
    </PageWrapper>
  )
}

type SocialLinkProps = {
  href: string
  icon: IconType
  ariaLabel: string
}
function SocialLink({ href, icon, ariaLabel }: SocialLinkProps) {
  return (
    <Link href={href} target="_blank">
      <IconButton
        variant="ghost"
        colorScheme="orange.500"
        size="lg"
        aria-label={ariaLabel}
      >
        <Icon as={icon} />
      </IconButton>
    </Link>
  )
}

type HeroTextProps = {
  children: React.ReactNode
  large?: boolean
}
function HeroText({ children, large = false }: HeroTextProps) {
  return (
    <Text
      fontSize={large ? ['xl', '3xl', '5xl'] : ['md', 'xl', '3xl']}
      fontWeight="bold"
    >
      {children}
    </Text>
  )
}
