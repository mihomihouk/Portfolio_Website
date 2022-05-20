import { Box, Divider, Heading, Text } from '@chakra-ui/react'

const SubHeading = ({ pageTitle, subTitle }) => (
  <Box align="center" mb={6}>
    <Heading as="h3" variant="page-title" alignItems="center" w="100%">
      <Text>{pageTitle}</Text>
    </Heading>
    {subTitle ? <Text variant="sub-title">{subTitle}</Text> : <></>}
    <Divider borderColor="orange.900" w="250px" />
  </Box>
)

export default SubHeading