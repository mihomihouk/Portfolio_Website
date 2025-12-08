import { Text, TextProps } from '@chakra-ui/react'

type SecondaryTextProps = {
    text: string
     mb?: TextProps['mb']
     mx?: TextProps['mx']
}
export function SecondaryText({text, mb, mx}: SecondaryTextProps) {
  return (
    <Text color="gray.500" fontSize="sm" mb={mb} mx={mx}>
        {text}
    </Text>
  )
}
