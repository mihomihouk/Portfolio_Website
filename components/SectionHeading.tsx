import React from 'react'
import { Heading } from '@chakra-ui/react'

export const SectionHeading = ({ title }) => {
  return (
    <Heading as="h3" textStyle="section-title">
      {title}
    </Heading>
  )
}
