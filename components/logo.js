import Link from 'next/link'
import Image from 'next/image'
import { Box, Button, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { GoHome } from 'react-icons/go'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <Button
        variant="unstyled"
        colorScheme="white"
        size="lg"
        leftIcon={<Icon as={GoHome} />}
      />
    </Link>
  )
}

export default Logo
