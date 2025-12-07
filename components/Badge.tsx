import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps
} from '@chakra-ui/react'

type BadgeProps = {
  color: ChakraBadgeProps['colorPalette']
  text: string
  ml?: number
  mt?: number
  mr?: number
  fontWeight?: 'bold'
}

export function Badge({ color, text, ml, mt, mr, fontWeight }: BadgeProps) {
  return (
    <ChakraBadge
      ml={ml}
      mt={mt}
      mr={mr}
      colorPalette={color}
      fontWeight={fontWeight}
    >
      {text}
    </ChakraBadge>
  )
}
