import Link from 'next/link'
import { Heading, Box, Image } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Badge } from './Badge'

export const Title = ({ children }) => (
  <Box mt={2}>
    <Link href="/projects" passHref>
      Projects
    </Link>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ProjectImage = ({ src, alt }) => (
  <Image borderRadius="24px" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ text }) => (
  <Badge color="orange" mr={2} fontWeight="bold" text={text.toUpperCase()}/>
)
