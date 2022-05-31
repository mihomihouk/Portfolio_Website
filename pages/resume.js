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

const Resume = ({
  agileLogoURL,
  chakraUILogoURL,
  contentfulLogoURL,
  strapiLogoURL
}) => {
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
      skill: chakraUILogoURL,
      length: '5month'
    },
    { id: 9, skill: contentfulLogoURL, length: '2weeks' },
    { id: 10, skill: strapiLogoURL, length: '2weeks' },
    { id: 11, skill: agileLogoURL, length: '2months' }
  ]
  const resumeDetails = [
    <>
      {/* eduction */}
      <Section id="education">
        <Stack spacing={6}>
          <SectionHeading title="Education" />
          <ResumeFormat
            heading={'University of Kyoto, Kyoto'}
            subHeading={
              'Left after the 1st year: MASTER OF CULTURAL ANTHROPOLOGY'
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
      {/* work history */}
      <Section delay={0.2} id="work">
        <SectionHeading title="Work History" />
        <Box mt="30px">
          <Stack>
            <ResumeFormat
              heading={'React Curriculum Creator'}
              subHeading={`I have designed and created over 30 lessons about learning React in "Code Lesson", a learning-by-coding application for coding.`}
              fromDate={'Feb 2022'}
              toDate={'present'}
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
              id={skill.id}
              image={skill.skill}
              studyPeriod={skill.length}
            />
          ))}
        </Wrap>
      </Section>
      {/* interest */}
      <Section delay={0.8} id="interests">
        <SectionHeading title="Interests" />
        <Box>
          <ResumeFormat
            heading="Languages"
            description="Through teaching and learning languages, I found language learning, just like code learning, opens doors to whole new worlds. Currently, I am learning Khmer, Cambodian national language."
          />
          <ResumeFormat
            heading="Cooking"
            description="Pursuing my passion towards food, I have traveled Australia to learn sustainable agriculture and studied Anthropology of Food in a master course. These experiences now weave into my kitchen creation. I particularly enjoy making experiments and creating delicious dishes out of whatever available in my fridge."
          />
          <ResumeFormat
            heading="Podcast"
            description="While walking and working out for daily exercise, and shipping a morning coffee, I always listen to my favourite channels. Doing so for several years, I significantly improved my multitasking skills and concentration."
          />
          <ResumeFormat
            heading="Gardening"
            description="Garden is where I learn the power of nature, patience and responsibility. I am currently making a plan to transform an abandoned open space in front of my room into a small vegetable garden."
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
          {resumeDetails.map(ResumeDetail => ResumeDetail)}
        </Box>
      </Box>
    </Layout>
  )
}

export default Resume
