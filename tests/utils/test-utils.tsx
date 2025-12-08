import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { theme } from '../../libs/theme'

export const renderWithProviders = (ui: ReactNode) => {
  return render(<ChakraProvider value={theme}>{ui}</ChakraProvider>)
}
