import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import React from 'react'

const MotionBox = motion(Box)

export type SectionProps = {
  children: React.ReactNode
  delay?: number
  id?: string
}

export function Section({ children, delay = 0, id = '' }:SectionProps) {
  return (
    <MotionBox
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={12}
      px={2}
      id={id}
      data-testid={id} 
    >
      {children}
    </MotionBox>
  )
}
