import React from 'react'
import { Heading } from '@chakra-ui/react'

const SectionHeading = ({ title }) => {
  return (
    <Heading as="h3" variant="section-title">
      {title}
    </Heading>
  )
}

export default SectionHeading
