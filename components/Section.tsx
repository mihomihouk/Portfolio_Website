import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

const MotionBox = motion(Box)

export const Section = ({ children, delay = 0, id = '' }) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={12}
    px={2}
    id={id}
  >
    {children}
  </MotionBox>
)
