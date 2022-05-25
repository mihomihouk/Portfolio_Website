import { useState, useRef } from 'react'
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Input,
  Textarea,
  FormHelperText
} from '@chakra-ui/react'
import PageTitle from '../components/PageTitle'
import Layout from '../components/layouts/Layout'
import { Section } from '../components/Section'
import { useForm } from '../components/hooks/useForm'
import { useFormspark } from '@formspark/use-formspark'
// import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const Profile = () => {
  const email = useForm('')
  const name = useForm('')
  const message = useForm('')
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORM_SPARK_FORM_ID
  })
  const [completeMessage, setCompleteMessage] = useState('')
  // const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState('')
  const reRef = useRef()

  // const formSparkUrl = `https://submit-form.com/${process.env.NEXT_PUBLIC_FORM_SPARK_FORM_ID}`
  const nameError = !name.value
  const emailError = !email.value
  const messageError = !message.value

  const handleSubmit = async e => {
    e.preventDefault()
    // setIsSubmitting(true)

    await postSubmission()
    // setIsSubmitting(false)
  }

  const postSubmission = async () => {
    const payload = {
      email: email.value,
      name: name.value,
      message: message.value,
      'g-recaptcha-response': recaptchaToken
    }
    try {
      // const result = await axios.post(formSparkUrl, payload)
      await submit(payload)
      setCompleteMessage({
        bg: 'green',
        text: 'Thanks, I will be in touch shortly.'
      })
      reRef.current.reset()
    } catch (error) {
      console.log(error.response.data)
      setCompleteMessage({
        bg: 'red',
        text: 'Sorry, there was a problem. Please try again.'
      })
    }
  }

  const updateRecaptchaToken = token => {
    setRecaptchaToken(token)
  }

  return (
    <Layout>
      <Container pt={3}>
        <PageTitle pageTitle="Contact" />
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
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                ref={reRef}
                onChange={updateRecaptchaToken}
              />

              <Button
                mt={4}
                type="submit"
                variant="action"
                colorScheme="orange"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </Button>
            </Stack>
          </Section>
        )}
      </Container>
    </Layout>
  )
}

export default Profile
