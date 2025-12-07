import React from 'react'
import { Card as ChakraCard } from '@chakra-ui/react'

export function Card({children}:{children:React.ReactNode}) {
  return (
    <ChakraCard.Root p={6} borderRadius="xl" boxShadow="md">
        <ChakraCard.Body>
            {children}
        </ChakraCard.Body>
    </ChakraCard.Root>
  )
}

