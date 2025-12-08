'use client'
import { Box, WrapItem, Stack, Icon, Wrap, Text } from '@chakra-ui/react'
import { FaLaptopCode } from 'react-icons/fa'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { MdHistory } from 'react-icons/md'
import { GiMeal } from 'react-icons/gi'
import { Link as Scroll } from 'react-scroll'
import { SectionHeading } from '../../components/SectionHeading'
import { PageWrapper } from '../_layout/page-wrapper'

//ResumeFormat
const ResumeFormat = props => {
  return (
    <Box display="flex" flexDirection="column" pb={1}>
      <Box
        display={{ lg: 'flex' }}
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        {props.heading && (
          <Box display="flex">
            <Text
              py="2px"
              fontSize={['xl', 'xl', '3xl']}
              fontWeight="bold"
              textAlign="left"
            >
              {props.heading}
            </Text>
          </Box>
        )}

        {props.fromDate && props.toDate && (
          <Box
            bg="#ff5823"
            px="12px"
            py={{ base: '0', lg: '10px' }}
            borderRadius="14px"
            color="white"
            alignItems="center"
            fontSize={{ base: 'sm', lg: 'lg' }}
          >
            {props.fromDate + '-' + props.toDate}
          </Box>
        )}
      </Box>
      {props.subHeading && (
        <Box pl={{ base: '0', lg: '25px' }}>
          <Text fontSize={{ base: 'sm', lg: 'lg' }}>{props.subHeading}</Text>
        </Box>
      )}
      {props.description && (
        <Box>
          <Text textAlign="left">{props.description}</Text>
        </Box>
      )}
      {props.image && (
        <WrapItem key={props.id}>
          <Stack align="center">
            <Box>
              <img src={props.image} width="100px" height="100px" />
            </Box>
            <Box>
              <Text width="100%">{props.name}</Text>
            </Box>
          </Stack>
        </WrapItem>
      )}
    </Box>
  )
}

// the left scroll menu list
const resumeMenuList = [
  { label: 'Work History', logoSrc: <Icon as={MdHistory} />, to: 'work' },
  {
    label: 'Programming Skills',
    logoSrc: <Icon as={FaLaptopCode} />,
    to: 'programming-skills'
  },
  { label: 'Interests', logoSrc: <Icon as={GiMeal} />, to: 'interests' }
]

export function ResumeContent({
  agileLogoURL,
  chakraUILogoURL,
  contentfulLogoURL
}) {
  //skill list
  const programmingSkillsDetails = [
    {
      id: 1,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
      name: 'HTML'
    },
    {
      id: 2,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
      name: 'CSS'
    },
    {
      id: 3,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
      name: 'JavaScript'
    },
    {
      id: 4,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
      name: 'Jquery'
    },
    {
      id: 5,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
      name: 'React.js'
    },
    {
      id: 6,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
      name: 'Typescript'
    },
    { id: 7, skill: agileLogoURL, name: 'Agile' },
    {
      id: 8,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      name: 'TailWind'
    },
    {
      id: 9,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      name: 'PostgreSQL'
    },
    {
      id: 10,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      name: 'PHP'
    },
    {
      id: 11,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
      name: 'Firebase'
    },
    {
      id: 12,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg',
      name: 'Material-UI'
    },
    {
      id: 13,
      skill: chakraUILogoURL,
      name: 'ChakraUI'
    },
    { id: 14, skill: contentfulLogoURL, name: 'Contentful' },
    {
      id: 15,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
      name: 'Playwright '
    },
    {
      id: 16,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
      name: 'Vitest'
    },
    {
      id: 17,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      name: 'Figma'
    }
  ]

  return (
    <PageWrapper>
      {/* the left scrollbar */}
      <Stack
        zIndex="4"
        position="fixed"
        pl={6}
        bg="transparent"
        display="flex"
        direction="column"
        width="15%"
        height="100%"
        justifyContent="center"
      >
        {resumeMenuList.map((item, index) => (
          <Scroll
            key={index}
            to={item.to}
            smooth={true}
            duration={600}
            offset={-100}
          >
            <Box display="flex" pb={4} alignItems="center">
              <Text pr={2} textStyle="h3">
                {item.logoSrc}
              </Text>
              <Text display={{ base: 'none', lg: 'flex' }}>{item.label}</Text>
            </Box>
          </Scroll>
        ))}
      </Stack>
      {/* Page Title */}
      <PageTitle pageTitle="Resume" />
      {/* main contents */}
      <Box bg="gray.200" borderRadius="24px">
        <Box py={6} width="70%" ml="auto" pr={2}>
          <>
            {/* work history */}
            <Section delay={0.2} id="work">
              <SectionHeading title="Work History" />
              <Box mt="30px">
                <Stack>
                  <ResumeFormat
                    heading={'Frontend Developer & UI/UX Designer'}
                    subHeading={`In my current role at Trackpro, I’ve cultivated a unique blend of UI/UX design and frontend engineering skills by working in a small, agile team. I take ownership of the entire frontend process — from designing wireframes and mockups to building responsive, accessible interfaces using HTML, CSS (Tailwind or Material UI), React, and TypeScript. I've also taken initiative in establishing sustainable and maintainable frontend architecture, ensuring scalability and long-term code health. Additionally, I’ve made significant contributions to testing strategies, UI consistency, and external library integration and management. I also occasionally contribute to backend development by writing and reviewing code, building APIs, and ensuring smooth integration between frontend and backend systems.`}
                    fromDate={'Aug 2023'}
                    toDate={'present'}
                  />
                  <ResumeFormat
                    heading={'Junior Full Stack Developer'}
                    subHeading={`I developed new features for Subly, an online subtitling app, by implementing both frontend and backend tasks with React, TypeScript and Node.js. I also found and fixed bugs, and implemented solutions to customers' issues and requests. Internally, I contributed to the team by actively engaging with code reviews and product
                    testing as well by organizing office days in London to strengthen the team bond.`}
                    fromDate={'Jul 2022'}
                    toDate={'Mar 2023'}
                  />
                  <ResumeFormat
                    heading={'React Curriculum Creator'}
                    subHeading={`I designed and created over 30 React lessons for Code Lesson, a code-learning web application for beginners.`}
                    fromDate={'Feb 2022'}
                    toDate={'jul 2022'}
                  />
                </Stack>
              </Box>
            </Section>
            {/* programming skill */}
            <Section delay={0.4} id="programming-skills">
              <SectionHeading title="Programming Skill" />
              <Wrap display="flex" gap="30px" align="center" py={2}>
                {programmingSkillsDetails.map(skill => (
                  <ResumeFormat
                    key={skill.id}
                    id={skill.id}
                    image={skill.skill}
                    name={skill.name}
                  />
                ))}
              </Wrap>
            </Section>
            {/* interest */}
            <Section delay={0.8} id="interests">
              <SectionHeading title="Interests" />
              <Box>
                <ResumeFormat
                  heading="Kickboxing"
                  description="I’ve been practicing kickboxing for a year, dedicating much of my free time to building strength and refining my sparring skills. It has taught me discipline, focus, and the importance of both supporting others and being supported, while sharpening my observation and strategic thinking."
                />
                <ResumeFormat
                  heading="Cooking"
                  description="I've traveled in Australia to learn sustainable agriculture and studied Anthropology of Food in a master's course. These experiences now weave into my kitchen creation. I enjoy particularly fermentation and creating delicious dishes out of whatever available in my fridge."
                />
                <ResumeFormat
                  heading="Gardening"
                  description="Garden is where I've learned the power of nature, patience and responsibility. My backyard has been my playground for the past several years, and I've been growing a variety of vegetables and herbs."
                />
              </Box>
            </Section>
          </>
        </Box>
      </Box>
    </PageWrapper>
  )
}
