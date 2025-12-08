'use client'
import { Box, SimpleGrid, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { PageWrapper } from '../_layout/page-wrapper/PageWrapper'
import Image from 'next/image'
import { BlogPosts } from '../../types/contentful'
import { Asset } from 'contentful'

type PostsContentProps = {
  posts: BlogPosts
}

export function PostsContent({ posts }: PostsContentProps) {
  return (
    <PageWrapper>
      <Box bg="gray.200" borderRadius="24px" mt={2}>
        <Box py={6} px={6}>
          <PageTitle pageTitle="Posts" />
          <SimpleGrid columns={1} gap={6}>
            {posts.map(post => {
              const thumbnail = post.fields.thumbnail as Asset //Contentful does not provide ts support for linked fields so cast a type
              return (
                <Section key={post.sys.id}>
                  <PostGridItem
                    title={post.fields.title}
                    thumbnail={thumbnail.fields.file}
                    href={post.fields.url}
                  >
                    {post.fields.abstract}
                  </PostGridItem>
                </Section>
              )
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </PageWrapper>
  )
}

function PostGridItem({ children, href, title, thumbnail }) {
  return (
    <Box w="100%" alignItems="center">
      <LinkBox cursor="pointer">
        <Image
          src={`https:${thumbnail.url}`}
          alt={title}
          layout=""
          width={thumbnail.details.image.width}
          height={thumbnail.details.image.height}
          className="grid-item-thumbnail"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2} fontSize={['md', 'xl', '3xl']} fontWeight="bold">
            {title}
          </Text>
        </LinkOverlay>
        <Text>{children}</Text>
      </LinkBox>
    </Box>
  )
}
