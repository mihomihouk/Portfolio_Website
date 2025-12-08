'use client'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import { Navbar } from '../Navbar'
import { theme } from '../../../libs/theme'
import { usePathname } from 'next/navigation'
import { AnalyticsService } from '../../../services/analytics'
import { Footer } from '../Footer'

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  useEffect(() => {
    const pageViewData = {
      path: pathname,
      userAgent: navigator.userAgent,
      referrer: document.referrer || undefined
    }
    AnalyticsService.logPageView(pageViewData)
  }, [pathname])

  return (
    <ChakraProvider value={theme}>
      <Navbar />
      <Container maxW="container.lg" pt={14}>
        <AnimatePresence exitBeforeEnter initial={true}>
          {children}
        </AnimatePresence>
      </Container>
      <Footer />
    </ChakraProvider>
  )
}
