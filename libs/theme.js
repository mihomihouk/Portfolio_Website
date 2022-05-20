import { extendTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: '4xl',
        fontWeight: 'bold',
        textDecorationColor: '#525252',
        marginTop: 3,
        marginBottom: 4
      },
      'page-title': {
        fontSize: 40,
        marginTop: 4,
        marginBottom: 4
      }
    }
  },
  Text: {
    baseStyle: {
      fontSize: 'lg'
    },
    sizes: {
      h1: {
        fontSize: '5xl',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '4xl',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '3xl',
        fontWeight: 'bold'
      },
      'sub-title': {
        fontSize: 20,
        marginBottom: 2
      }
    }
  },
  Link: {
    baseStyle: {
      textDecoration: 'none'
    }
  },
  Button: {
    baseStyle: {
      bg: 'orange.500'
    },
    variants: {
      action: {
        color: 'black'
      }
    }
  }
}

const fonts = {
  ...chakraTheme.fonts,
  body: "'PT Sans', sans-serif",
  heading: "'PT Sans', sans-serif"
}

const colors = {
  glassTeal: '#88ccca'
}

const overrides = {
  ...chakraTheme,
  components,
  fonts,
  colors
}

const theme = extendTheme(overrides)

export default theme
