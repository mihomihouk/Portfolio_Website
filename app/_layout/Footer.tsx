import { Box, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Link from 'next/link'

export function Footer() {
  const copyRightText = `© ${dayjs().year()} Miho Inagaki`
  return (
    <Box
      as="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={6}
      color="gray.500"
      fontSize="sm"
    >
      <Text>{copyRightText}</Text>
      <Text mx={1}>·</Text>
      <Link href="/privacy">Privacy Policy</Link>
    </Box>
  )
}
