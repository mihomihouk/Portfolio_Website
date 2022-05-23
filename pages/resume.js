import { useState } from 'react'
import { Box, Icon, Text, Wrap, WrapItem, Stack } from '@chakra-ui/react'
import { Link as Scroll } from 'react-scroll'
import Layout from '../components/layouts/Layout'
import PageTitle from '../components/PageTitle'
import { IoSchoolSharp } from 'react-icons/io5'
import { MdHistory } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { Heading } from '@chakra-ui/react'

//ResumeFormat
const ResumeFormat = props => {
  return (
    <Box display="flex" flexDirection="column" pb={1}>
      <Box display="flex" justifyContent="space-between" align="center" py={2}>
        {props.heading && (
          <Box display="flex">
            <Text py="2px" size="h3">
              {props.heading}
            </Text>
          </Box>
        )}

        {props.fromDate && props.toDate && (
          <Box bg="#ff5823" px="12px" borderRadius="14px" color="white">
            <Text pt={2.5}>{props.fromDate + '-' + props.toDate}</Text>
          </Box>
        )}
      </Box>
      {props.subHeading && (
        <Box pl="25px">
          <Text>{props.subHeading}</Text>
        </Box>
      )}
      {props.description && (
        <Box textAlign="justify">
          <Text>{props.description}</Text>
        </Box>
      )}
      {props.image && (
        <WrapItem key={props.id}>
          <Stack align="center">
            <Box>
              <img src={props.image} width="100px" height="100px" />
            </Box>
            <Box>
              <Text width="100%">{props.studyPeriod}</Text>
            </Box>
          </Stack>
        </WrapItem>
      )}
    </Box>
  )
}

// the left scroll menu list
const resumeMenuList = [
  {
    label: 'Education',
    logoSrc: <Icon as={IoSchoolSharp} />,
    to: 'education'
  },
  { label: 'Work History', logoSrc: <Icon as={MdHistory} />, to: 'work' },
  {
    label: 'Programming Skills',
    logoSrc: <Icon as={FaLaptopCode} />,
    to: 'programming-skills'
  },
  { label: 'Interests', logoSrc: <Icon as={GiMeal} />, to: 'interests' }
]

//skill list
const programmingSkillsDetails = [
  {
    id: 1,
    skill:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
    length: '7months'
  },
  {
    id: 2,
    skill:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
    length: '7months'
  },
  {
    id: 3,
    skill:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    length: '7months'
  },
  {
    id: 4,
    skill:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    length: '6months'
  },
  {
    id: 5,
    skill:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    length: '5months'
  },
  {
    id: 6,
    skill:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
    length: '3months'
  },
  {
    id: 7,
    skill:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
    length: '2weeks'
  },
  {
    id: 8,
    skill:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg',
    length: '5month'
  },
  {
    id: 9,
    skill: './images/skills/chakra-ui.png',
    length: '5month'
  },
  { id: 9, skill: './images/skills/strapi.png', length: '2weeks' },
  { id: 10, skill: './images/skills/contentful.png', length: '2weeks' },
  { id: 11, skill: './images/skills/agile.png', length: '2months' }
]

const Resume = props => {
  const resumeDetails = [
    <>
      {/* eduction */}
      <Section id="education">
        <Stack spacing={6}>
          <SectionHeading title="Education" />
          <ResumeFormat
            heading={'University......, Tokyo'}
            subHeading={'BACHELOR OF INTERCULTURAL COMMUNICATION'}
            fromDate={'2011'}
            toDate={'2015'}
          />
          <ResumeFormat
            heading={'University......, Tokyo'}
            subHeading={'BACHELOR OF INTERCULTURAL COMMUNICATION'}
            fromDate={'2011'}
            toDate={'2015'}
          />
          <ResumeFormat
            heading={'High School'}
            subHeading={'BACHELOR OF INTERCULTURAL COMMUNICATION'}
            fromDate={'2011'}
            toDate={'2015'}
          />
        </Stack>
      </Section>
      ,{/* work experience */}
      <Section delay={0.2} id="work">
        <SectionHeading title="Work History" />
        <Box mt="30px">
          <Stack>
            <ResumeFormat
              heading={'Unemployed'}
              subHeading={'CurrentlyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
              fromDate={'March 2022'}
              toDate={'present'}
            />
            <ResumeFormat
              heading={'Unemployed'}
              subHeading={'CurrentlyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
              fromDate={'March 2022'}
              toDate={'present'}
            />
            <ResumeFormat
              heading={'Unemployed'}
              subHeading={'CurrentlyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
              fromDate={'March 2022'}
              toDate={'present'}
            />
          </Stack>
        </Box>
      </Section>
      ,{/* programming skill */}
      <Section delay={0.4} id="programming-skills">
        <SectionHeading title="Programming Skill" />
        <Wrap display="flex" spacing="30px" align="center" py={2}>
          {programmingSkillsDetails.map(skill => (
            <ResumeFormat
              id={skill.id}
              image={skill.skill}
              studyPeriod={skill.length}
            />
          ))}
        </Wrap>
      </Section>
      ,{/* interest */}
      <Section delay={0.8} id="interests">
        <SectionHeading title="Interests" />
        <Box>
          <ResumeFormat
            heading="Teaching"
            description="Over the past one year, I have developed my teaching skill by undertaking one-to-one online Japanese language sessions."
          />
          <ResumeFormat
            heading="Cooking"
            description="Over the past one year, I have developed my teaching skill by undertaking one-to-one online Japanese language sessions."
          />
          <ResumeFormat
            heading="Comedy"
            description="Over the past one year, I have developed my teaching skill by undertaking one-to-one online Japanese language sessions."
          />
        </Box>
      </Section>
    </>
  ]

  return (
    <Layout>
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
              <Text pr={2} size="h3">
                {item.logoSrc}
              </Text>
              <Text>{item.label}</Text>
            </Box>
          </Scroll>
        ))}
      </Stack>
      {/* Page Title */}
      <PageTitle pageTitle="Resume" />
      {/* main contents */}
      <Box bg="gray.200" borderRadius="24px">
        <Box py={6} width="70%" ml="auto" pr={2}>
          {resumeDetails.map(ResumeDetail => ResumeDetail)}
        </Box>
      </Box>
    </Layout>
  )
}

export default Resume
