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
      h4: {
        fontSize: '2xl',
        fontWeight: 'bold'
      },
      h5: {
        fontSize: 'xl',
        fontWeight: 'bold'
      },
      h6: {
        fontSize: 'md'
      },
      'sub-title': {
        fontSize: 20,
        marginBottom: 2
      }
    }
  },

  Button: {
    baseStyle: {
      bg: 'orange.500',
      _focus: { boxShadow: 'none' }
    },
    variants: {
      action: {
        color: 'black'
      }
    }
  },
  Link: {
    baseStyle: {
      _focus: { boxShadow: 'none' }
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
