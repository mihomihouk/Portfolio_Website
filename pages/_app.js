import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { trackPageView } from '../services/track'

const Website = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const pageViewData = {
      path: router.asPath,
      userAgent: navigator.userAgent,
      referrer: document.referrer || undefined
    }
    trackPageView(pageViewData)
  }, [router.asPath])
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
