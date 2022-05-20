import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import SubHeading from '../components/subHeading'
import { client } from '../libs/client'

export const getStaticProps = async () => {
  const res = await client.getEntries({
    content_type: 'post'
  })
  return { props: { posts: res.items } }
}

const Posts = ({ posts }) => {
  return (
    <Layout title="Posts">
      <Container pt={3}>
        <SubHeading pageTitle="Posts" />
        <SimpleGrid columns={1} gap={6}>
          {posts.map(post => (
            <Section key={post.sys.id}>
              <GridItem
                title={post.fields.title}
                thumbnail={post.fields.thumbnail.fields.file}
                href={post.fields.url}
              />
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts
