'use client'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { PostGridItem } from '../../components/GridItem'
import PageTitle from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { PageWrapper } from './page-wrapper'

export function PostsPage({ posts }) {
  return (
    <PageWrapper>
      <Box bg="gray.200" borderRadius="24px" mt={2}>
        <Box py={6} px={6}>
          <PageTitle pageTitle="Posts" />
          <SimpleGrid columns={1} gap={6}>
            {posts.map(post => (
              <Section key={post.sys.id}>
                <PostGridItem
                  title={post.fields.title}
                  thumbnail={post.fields.thumbnail.fields.file}
                  href={post.fields.url}
                >
                  {post.fields.abstract}
                </PostGridItem>
              </Section>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </PageWrapper>
  )
}
