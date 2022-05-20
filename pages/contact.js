import { useState } from 'react'
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  Input,
  Textarea,
  FormHelperText,
  Text
} from '@chakra-ui/react'
import SubHeading from '../components/subHeading'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { useForm } from '../components/hooks/useForm'
import axios from 'axios'
// import ReCAPTCHA from 'react-google-recaptcha-v3'

// const formId = process.env.FORM_SPARK_FORM_ID

const Profile = () => {
  const email = useForm('')
  const name = useForm('')
  const message = useForm('')
  const [completeMessage, setCompleteMessage] = useState('')
  // const [submitting, setSubmitting] = useState(false)
  // const [recaptchaToken, setRecaptchaToken] = useState('')
  // const recaptchaRef = useRef()

  const formSparkUrl = `https://submit-form.com/oSQQnyBW`
  const nameError = !name.value
  const emailError = !email.value
  const messageError = !message.value

  console.log(process.env.FORMSPARK_FORM_ID)
  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    await postSubmission()
    setSubmitting(false)
  }

  const postSubmission = async () => {
    const payload = {
      email: email.value,
      name: name.value,
      message: message.value
    }
    try {
      const result = await axios.post(formSparkUrl, payload)
      console.log(result)
      setCompleteMessage({
        bg: 'green',
        text: 'Thanks, I will be in touch shortly.'
      })
    } catch (error) {
      console.log(error)
      setCompleteMessage({
        bg: 'red',
        text: 'Sorry, there was a problem. Please try again.'
      })
    }
  }

  // const updateRecaptchaToken = token => {
  //   setRecaptchaToken(token)
  // }

  return (
    <Layout>
      <Container pt={3}>
        <SubHeading pageTitle="Contact" />
        {completeMessage ? (
          <Box
            textAlign="center"
            my={4}
            p={4}
            bg={completeMessage.bg}
            color="white"
            borderRadius="15px"
          >
            {completeMessage.text}
          </Box>
        ) : (
          <Section>
            <Stack spacing={5}>
              <FormControl isInvalid={nameError}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" type="name" {...name} />
                {nameError && (
                  <FormHelperText>Name is required.</FormHelperText>
                )}
              </FormControl>
              <FormControl isInvalid={emailError}>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input id="email" type="email" {...email} />
                {emailError && (
                  <FormHelperText>Email is required.</FormHelperText>
                )}
              </FormControl>
              <FormControl isInvalid={messageError}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea id="message" type="message" {...message} />
                {messageError && (
                  <FormHelperText>Message is required.</FormHelperText>
                )}
              </FormControl>
              {/* <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={updateRecaptchaToken}
              /> */}

              <Button
                mt={4}
                type="submit"
                variant="action"
                colorScheme="orange"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          </Section>
        )}
      </Container>
    </Layout>
  )
}

export default Profile
