import { Heading } from '@chakra-ui/react'

export function SectionHeading({ title }) {
  return (
    <Heading as="h3" textStyle="section-title">
      {title}
    </Heading>
  )
}
