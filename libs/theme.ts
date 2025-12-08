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
      }
    },
    recipes: {
      button: buttonRecipe,
      link: linkRecipe
    }
  }
})
