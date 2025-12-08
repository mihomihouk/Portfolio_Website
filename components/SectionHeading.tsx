import { Heading, HeadingProps } from '@chakra-ui/react'

type SectionHeadingProps = {
  title: string, my?: HeadingProps['my'], textAlign?: HeadingProps['textAlign'] 
}
export function SectionHeading({ title, my, textAlign }: SectionHeadingProps) {
  return (
    <Heading 
        as="h3" 
        fontSize= '3xl'
        fontWeight= 'bold'
        textDecorationColor= '#525252'
        marginTop= '3'
        marginBottom='4'
    my={my} textAlign={textAlign}>
      {title}
    </Heading>
  )
}
