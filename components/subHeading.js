import { Box, Divider, Heading } from '@chakra-ui/react'

const SubHeading = ({ pageTitle }) => (
  <Box align="center" mb={6} mt={4}>
    <Heading as="h2" size="3xl" alignItems="center" w="100%">
      {pageTitle}
    </Heading>
    <Divider borderColor="orange.900" w="250px" />
  </Box>
)

export default SubHeading
