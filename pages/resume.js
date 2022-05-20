import { useState } from 'react'
import {
  Box,
  Container,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Icon,
  Text,
  Divider,
  Stack
} from '@chakra-ui/react'
import { Link as Scroll } from 'react-scroll'
import Layout from '../components/layouts/article'
import SubHeading from '../components/subHeading'
import { IoSchoolSharp } from 'react-icons/io5'
import { MdHistory } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'
import Section from '../components/section'
import SectionHeading from '../components/sectionHeading'

const Resume = props => {
  const [selectedBullet, setSelectedBullet] = useState('')

  const ResumeHeading = props => {
    return (
      <Box display="flex" flexDirection="column" pb={1}>
        <Box
          display="flex"
          justifyContent="space-between"
          align="center"
          py={2}
        >
          <Box display="flex">
            <Box pt="7px" pr="10px">
              <Box h="15px" w="15px" borderRadius="50%" bg="#ff5823"></Box>
            </Box>
            <Text py="2px" fontSize="16px">
              {props.heading ? props.heading : ''}
            </Text>
          </Box>

          {props.fromDate && props.toDate ? (
            <Box
              bg="#ff5823"
              py="4px"
              px="12px"
              fontsize="14px"
              borderRadius="14px"
              color="white"
            >
              {props.fromDate + '-' + props.toDate}
            </Box>
          ) : (
            <Box></Box>
          )}
        </Box>
        <Box fontSize="14px" pl="25px">
          <Text>{props.subHeading ? props.subHeading : ''}</Text>
        </Box>
        <Box fontSize="14px" textAlign="justify">
          <Text>{props.description ? props.description : ''}</Text>
        </Box>
      </Box>
    )
  }

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

  const programmingSkillsDetails = [
    { skill: 'HTML', length: '6months' },
    { skill: 'CSS', length: '6months' },
    { skill: 'JavaScript', length: '5months' },
    { skill: 'React', length: '5months' },
    { skill: 'Next.js', length: '4months' },
    { skill: 'Firebase', length: '1months' },
    { skill: 'Typescript', length: '2weeks' }
  ]

  const resumeDetails = [
    <>
      <Stack spacing={4}>
        {/* eduction */}
        <Section id="education">
          <Stack spacing={6}>
            <SectionHeading title="Education" />
            <ResumeHeading
              heading={'University......, Tokyo'}
              subHeading={'BACHELOR OF INTERCULTURAL COMMUNICATION'}
              fromDate={'2011'}
              toDate={'2015'}
            />
            <ResumeHeading
              heading={'University......, Tokyo'}
              subHeading={'BACHELOR OF INTERCULTURAL COMMUNICATION'}
              fromDate={'2011'}
              toDate={'2015'}
            />
            <ResumeHeading
              heading={'High School'}
              subHeading={'BACHELOR OF INTERCULTURAL COMMUNICATION'}
              fromDate={'2011'}
              toDate={'2015'}
            />
          </Stack>
        </Section>
        {/* work experience */}
        <Section delay={0.2} id="work">
          <SectionHeading title="Work History" />
          <Box mt="30px">
            <Box>
              <ResumeHeading
                heading={'Unemployed'}
                subHeading={''}
                fromDate={'March 2022'}
                toDate={'present'}
              />

              <Box mt="10px" textAlign="justify" maxWidth="100%">
                <Text>CurrentlyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
              </Box>

              <Box fontSize="12px">
                <Text>- CurrentlyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                <Text>- CurrentlyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                <Text>- CurrentlyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
              </Box>
            </Box>
          </Box>
        </Section>

        {/* programming skill */}
        <Section delay={0.4} id="programming-skills">
          <SectionHeading title="Programming Skill" />
          <List>
            {programmingSkillsDetails.map((skill, index) => (
              <ResumeHeading
                key={index}
                heading={skill.skill}
                subHeading={skill.length}
              />
            ))}
          </List>
        </Section>

        {/* interest */}
        <Section delay={0.6} id="interests">
          <SectionHeading title="Interests" />
          <Box>
            <ResumeHeading
              heading="Teaching"
              description="Over the past one year, I have developed my teaching skill by undertaking one-to-one online Japanese language sessions."
            />
            <ResumeHeading
              heading="Cooking"
              description="Over the past one year, I have developed my teaching skill by undertaking one-to-one online Japanese language sessions."
            />
            <ResumeHeading
              heading="Comedy"
              description="Over the past one year, I have developed my teaching skill by undertaking one-to-one online Japanese language sessions."
            />
          </Box>
        </Section>
      </Stack>
    </>
  ]

  return (
    <Layout>
      <Container pt={3}>
        <SubHeading pageTitle="Resume" subTitle="My formal Bio Details" />
        <Box display="flex" position="relative">
          <Box w="40%" px={2} pt={4}>
            <Box>
              {resumeMenuList.map((item, index) => (
                <Scroll
                  key={index}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-100}
                >
                  <Box display="flex" pb={4} alignItems="center">
                    <Text pr={2}>{item.logoSrc}</Text>
                    <Text>{item.label}</Text>
                  </Box>
                </Scroll>
              ))}
            </Box>
          </Box>
          <Divider orientation="vertical" px={2} />
          <Box>
            <Box>{resumeDetails.map(ResumeDetail => ResumeDetail)}</Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Resume
