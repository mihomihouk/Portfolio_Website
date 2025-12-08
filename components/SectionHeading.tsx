import { Heading } from '@chakra-ui/react'

export function SectionHeading({ title }: { title: string }) {
  return (
    <Heading as="h3" textStyle="section-title">
      {title}
    </Heading>
  )
}
