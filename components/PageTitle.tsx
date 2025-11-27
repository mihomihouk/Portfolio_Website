import { Box, Separator, Heading } from '@chakra-ui/react'

export const PageTitle = ({ pageTitle }) => (
  <Box alignItems="center" mb={6} mt={4}>
    <Heading as="h2" size="3xl" alignItems="center" textAlign="center" w="100%">
      {pageTitle}
    </Heading>
    <Separator borderColor="orange.900" w="250px" mx="auto" />
  </Box>
)
