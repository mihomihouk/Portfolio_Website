import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, Heading } from '@chakra-ui/react'

type ProjectPreviewProps = {
  children: React.ReactNode
  slug: string
  title: string
  //  TODO: type correctly
  thumbnail: any
}

export function ProjectPreview({
  children,
  slug,
  title,
  thumbnail
}: ProjectPreviewProps) {
  return (
    <Box w="100%" alignItems="center">
      <NextLink href={'/projects/' + slug} passHref>
        <LinkBox cursor="pointer">
          <Image
            src={`http:${thumbnail.url}`}
            alt={title}
            width={thumbnail.details.image.width}
            height={thumbnail.details.image.height}
            className="grid-item-thumbnail"
          />
          <Heading textAlign="center" textStyle="h3" my={2} fontWeight="bold">
            {title}
          </Heading>
          <Text>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}
