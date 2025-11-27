import { Box, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/Layout'
import { Section } from '../components/Section'
import { PostGridItem } from '../components/GridItem'
import PageTitle from '../components/PageTitle'
import { client } from '../libs/client'

export const getStaticProps = async () => {
  const res = await client.getEntries({
    content_type: 'post'
  })
  return {
    props: { posts: res.items },
    revalidate: 1
  }
}

const Posts = ({ posts }) => {
  return (
    <Layout>
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
                />
              </Section>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  )
}

export default Posts
