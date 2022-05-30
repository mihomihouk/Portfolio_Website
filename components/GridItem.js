import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" algin="center">
      <LinkBox cursor="pointer">
        <Image
          src={`http:${thumbnail.url}`}
          alt={title}
          layout=""
          width={thumbnail.details.image.width}
          height={thumbnail.details.image.height}
          className="grid-item-thumbnail"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2} fontSize={30}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const ProjectGridItem = ({ children, slug, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={'/projects/' + slug} passHref>
      <LinkBox cursor="pointer">
        <Image
          src={`http:${thumbnail.url}`}
          alt={title}
          width={thumbnail.details.image.width}
          height={thumbnail.details.image.height}
          className="grid-item-thumbnail"
        />
        <LinkOverlay href={'/projects/' + slug}>
          <Text my={2} size="h3">
            {title}
          </Text>
        </LinkOverlay>
        <Text>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
  .grid-item-thumbnail {
    border-radius:12px
  }
  `}
  />
)
