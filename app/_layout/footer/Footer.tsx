import { Box } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Link from 'next/link'
import { SecondaryText } from '../../../components/secondary-title/SecondaryText'
import { getPagePath } from '../../../utils/path/path'

export function Footer() {
  const copyRightText = `© ${dayjs().year()} Miho Inagaki`
  return (
    <Box
      as="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={6}
      fontSize="sm"
      color="gray.500"
      data-testid="footer"
    >
      <SecondaryText text={copyRightText} mb={0} />
      <SecondaryText text="·" mx={1} />
      <Link href={getPagePath('Privacy')}>Privacy Policy</Link>
    </Box>
  )
}
