import { createSystem, defaultConfig, defineRecipe } from '@chakra-ui/react'

const buttonRecipe = defineRecipe({
  base: {
    bg: 'orange.500',
    _focus: {
      boxShadow: 'none'
    }
  },
  variants: {
    variant: {
      action: {
        color: 'black',
        bg: 'orange.500'
      }
    }
  }
})

const linkRecipe = defineRecipe({
  base: {
    _focus: {
      boxShadow: 'none'
    }
  }
})

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: {
          value: "'PT Sans', sans-serif"
        },
        heading: {
          value: "'PT Sans', sans-serif"
        }
      },
      colors: {
        glassTeal: {
          value: '#88ccca'
        }
      }
    },
    textStyles: {
      // Base text style (default for all text)
      body: {
        value: {
          fontSize: 'lg'
        }
      },

      // Heading-like text styles
      h1: {
        value: {
          fontSize: '5xl',
          fontWeight: 'bold'
        }
      },
      h2: {
        value: {
          fontSize: '4xl',
          fontWeight: 'bold'
        }
      },
      h3: {
        value: {
          fontSize: '3xl',
          fontWeight: 'bold'
        }
      },
      h4: {
        value: {
          fontSize: '2xl',
          fontWeight: 'bold'
        }
      },
      h5: {
        value: {
          fontSize: 'xl',
          fontWeight: 'bold'
        }
      },
      h6: {
        value: {
          fontSize: 'md'
        }
      },
      'sub-title': {
        value: {
          fontSize: '20px',
          marginBottom: '2'
        }
      },
      'section-title': {
        value: {
          fontSize: '4xl',
          fontWeight: 'bold',
          textDecorationColor: '#525252',
          marginTop: '3',
          marginBottom: '4'
        }
      },
      'page-title': {
        value: {
          fontSize: '40px',
          marginTop: '4',
          marginBottom: '4'
        }
      }
    },
    recipes: {
      button: buttonRecipe,
      link: linkRecipe
    }
  }
})
