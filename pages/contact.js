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
import ReCAPTCHA from 'react-google-recaptcha'

const Profile = () => {
  console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
  const email = useForm('')
  const name = useForm('')
  const message = useForm('')

  const [completeMessage, setCompleteMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const reRef = useRef(<ReCAPTCHA />)

  const nameError = !name.value
  const emailError = !email.value
  const messageError = !message.value

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    await postSubmission()
    setIsSubmitting(false)
  }

  const postSubmission = async () => {
    const token = await reRef.current.executeAsync()

    const formData = {
      email: email.value,
      name: name.value,
      message: message.value,
      token
    }
    try {
      await fetch('/api/form', {
        method: 'POST',
        headers: {
          Accept: 'application/json,text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
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
            <Stack spacing={{ base: 3, lg: 5 }}>
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
                size="invisible"
              />

              <Button
                mt={4}
                type="submit"
                variant="action"
                colorScheme="orange"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </Stack>
          </Section>
        )}
      </Container>
    </Layout>
  )
}

export default Profile
