import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Button,
  Text,
  Link,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import Layout from '../components/layouts/article'
import SubHeading from '../components/subHeading'

const Profile = () => {
  return (
    <Layout>
      <Container pt={3}>
        <SubHeading pageTitle="About Me" />
        <SimpleGrid
          borderColor="white"
          borderWidth="1px"
          rounded="lg"
          columns={[1, 1, 2]}
        >
          <Box display={{ base: 'none', md: 'flex' }}>
            <Image src="/images/profile/second.jpg" rounded="lg" />
          </Box>
          <Stack justifyContent="space-between" w="100%" p={{ base: 4, md: 2 }}>
            <Box>
              <Text>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Text>
            </Box>

            <Box>
              <Text fontSize={20}>Highlights:</Text>
              <List spacing={2} w="100%">
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="orange" />
                  aaaaaaaaaaaaaaaaaaa
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="orange" />
                  aaaaaaaaaaaaaaaaaaa
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="orange" />
                  aaaaaaaaaaaaaaaaaaa
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="orange" />
                  aaaaaaaaaaaaaaaaaaa
                </ListItem>
              </List>
            </Box>

            <Box mr={6} align="right">
              <Link href="/images/cv/mihocv.pdf" download="miho.pdf">
                <Button colorScheme="orange">Get Resume</Button>
              </Link>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Profile
