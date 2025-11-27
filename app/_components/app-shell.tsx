'use client'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Navbar from '../../components/Navbar'
import theme from '../../libs/theme' // ✅ Import YOUR theme

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW="container.lg" pt={14}>
        <AnimatePresence exitBeforeEnter initial={true}>
          {children}
        </AnimatePresence>
      </Container>
    </ChakraProvider>
  )
}
