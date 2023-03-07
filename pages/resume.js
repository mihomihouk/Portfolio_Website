import { Box, Icon, Text, Wrap, WrapItem, Stack } from '@chakra-ui/react'
import { Link as Scroll } from 'react-scroll'
import Layout from '../components/layouts/Layout'
import PageTitle from '../components/PageTitle'
import { IoSchoolSharp } from 'react-icons/io5'
import { MdHistory } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'
import { Section } from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { client } from '../libs/client'

export const getStaticProps = async () => {
  const contentful = require('contentful')
  const agileLogo = await client.getAsset('1y0uxAPI1Wfdwabrhizd1A')
  const chakraUILogo = await client.getAsset('4qahETPzPahg9OOWT3ZB4T')
  const contentfulLogo = await client.getAsset('7kwOlrTJdl14EnnnYpexpE')
  const strapiLogo = await client.getAsset('1RLMMWF1h00ykECZLsOryZ')
  return {
    props: {
      agileLogoURL: `https:${agileLogo.fields.file.url}`,
      chakraUILogoURL: `https:${chakraUILogo.fields.file.url}?h=100&w=100`,
      contentfulLogoURL: `https:${contentfulLogo.fields.file.url}`,
      strapiLogoURL: `https:${strapiLogo.fields.file.url}`
    }
  }
}

//ResumeFormat
const ResumeFormat = props => {
  return (
    <Box display="flex" flexDirection="column" pb={1}>
      <Box
        display={{ lg: 'flex' }}
        justifyContent="space-between"
        align="center"
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
            align="center"
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
  { label: 'Interests', logoSrc: <Icon as={GiMeal} />, to: 'interests' },
  {
    label: 'Education',
    logoSrc: <Icon as={IoSchoolSharp} />,
    to: 'education'
  }
]

const Resume = ({ agileLogoURL, chakraUILogoURL, contentfulLogoURL }) => {
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
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
      name: 'React.js'
    },
    {
      id: 5,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
      name: 'Typescript'
    },
    { id: 6, skill: agileLogoURL, name: 'Agile' },
    {
      id: 7,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      name: 'TailWind'
    },
    {
      id: 8,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      name: 'PostgreSQL'
    },
    {
      id: 9,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
      name: 'Next.js'
    },
    {
      id: 10,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
      name: 'Firebase'
    },
    {
      id: 11,
      skill:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg',
      name: 'Material-UI'
    },
    {
      id: 12,
      skill: chakraUILogoURL,
      name: 'ChakraUI'
    },
    { id: 13, skill: contentfulLogoURL, name: 'Contentful' }
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
                    heading={'Junior Full Stack Developer'}
                    subHeading={`I've designed and developed new features for "Subly", an online subtitling app, by implementing both frontend and backend tasks with React, TypeScript and Node.js. I've also found and fixed bugs, and implemented solutions to customers' issues and requests. Internally, I've contributed to the team by actively engaging with code reviews and product
                    testing as well by organizing office days in London to strengthen the team bond.`}
                    fromDate={'Jul 2022'}
                    toDate={'present'}
                  />
                  <ResumeFormat
                    heading={'React Curriculum Creator'}
                    subHeading={`I designed and created over 30 React lessons for "Code Lesson", a code-learning web application for beginners.`}
                    fromDate={'Feb 2022'}
                    toDate={'jul 2022'}
                  />
                  <ResumeFormat
                    heading={'Japanese Language Teacher '}
                    subHeading={
                      'I taught Japanese grammars and conversational techniques to 7 foreign students online. I also designed the lessons, proofread CVs and writing pieces as well as conducted demo interviews. '
                    }
                    fromDate={'Feb 2021'}
                    toDate={'Mar 2022'}
                  />
                  <ResumeFormat
                    heading={'Kitchen Hand'}
                    subHeading={
                      'I cooked seasonal food with local agricultural products. I also designed an efficient working space and improved customer service.'
                    }
                    fromDate={'Dec 2018'}
                    toDate={'Aug 2018'}
                  />
                  <ResumeFormat
                    heading={'Wine Factory Operator'}
                    subHeading={
                      'Working in the bottling section, I transported wine from storage tanks to final tanks. I also added additives, controlled the quality, and sampled wine for the production.'
                    }
                    fromDate={'Jan 2018'}
                    toDate={'Apr 2018'}
                  />
                  <ResumeFormat
                    heading={'Permaculturalist Personal Assistant'}
                    subHeading={
                      'I developed the marketing strategy, improved the website contents, and shoot photographs and videos of  her work as a permaculturalist. I also organised and managed everyday tasks and small projects for her.'
                    }
                    fromDate={'Jun 2017'}
                    toDate={'Oct 2017'}
                  />
                  <ResumeFormat
                    heading={'NGO Project Coordinator'}
                    subHeading={
                      'Working in the Cambodian project, I consulted, recruited and trained staff; made quarterly, monthly and daily project goals; designed and led study-tours; wrote articles, expanded network through events, and reported to patrons and sponsors.'
                    }
                    fromDate={'Jan 2016'}
                    toDate={'Oct 2016'}
                  />
                </Stack>
              </Box>
            </Section>
            {/* programming skill */}
            <Section delay={0.4} id="programming-skills">
              <SectionHeading title="Programming Skill" />
              <Wrap display="flex" spacing="30px" align="center" py={2}>
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
            {/* eduction */}
            <Section id="education">
              <Stack spacing={6}>
                <SectionHeading title="Education" />
                <ResumeFormat
                  heading={'University of Kyoto, Kyoto'}
                  subHeading={
                    'Discontinued after the 1st year: MASTER OF CULTURAL ANTHROPOLOGY'
                  }
                  fromDate={'2019'}
                  toDate={'2021'}
                />
                <ResumeFormat
                  heading={'SOAS University of London'}
                  subHeading={'MA ANTHROPOLOGY OF FOOD'}
                  fromDate={'2019'}
                  toDate={'2020'}
                />
                <ResumeFormat
                  heading={'Rikkyo University, Tokyo'}
                  subHeading={'BACHELOR OF INTERCULTURAL COMMUNICATION'}
                  fromDate={'2011'}
                  toDate={'2015'}
                />
              </Stack>
            </Section>
            {/* interest */}
            <Section delay={0.8} id="interests">
              <SectionHeading title="Interests" />
              <Box>
                <ResumeFormat
                  heading="Comedy"
                  description="Whether stand-up, sitcoms or books, I've been always fascinated by the art of comedy. I'm currently exploring British comedy shows and keen to visit different comedy venues in London."
                />
                <ResumeFormat
                  heading="Cooking"
                  description="I've traveled in Australia to learn sustainable agriculture and studied Anthropology of Food in a master's course. These experiences now weave into my kitchen creation. I enjoy particularly fermentation and creating delicious dishes out of whatever available in my fridge."
                />
                <ResumeFormat
                  heading="Gardening"
                  description="Garden is where I've learned the power of nature, patience and responsibility. My recent achievement includes creating a raised bed and a compost bin by making use of used wood pallets."
                />
              </Box>
            </Section>
          </>
        </Box>
      </Box>
    </Layout>
  )
}

export default Resume
