'use client'
import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text
} from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} alignItems="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}
