import React from 'react'
import { Box } from '@chakra-ui/react'

export const Skelton = () => {
  return (
    <Box maxWidth="1200px" my="20px" mx="auto">
      <Box bg="#dbcc1a" borderRadius="4px" my="20px" py="12%"></Box>
      <Box
        bg="#dbcc1a"
        borderRadius="4px"
        my="20px"
        py="15px"
        maxWidth="500px"
      ></Box>
      <Box
        bg="#dbcc1a"
        borderRadius="4px"
        my="20px"
        py="8px"
        maxWidth="1000px"
      ></Box>
      <Box bg="#dbcc1a" borderRadius="4px" my="20px"></Box>
      <Box bg="#dbcc1a" borderRadius="4px" my="20px"></Box>
    </Box>
  )
}
