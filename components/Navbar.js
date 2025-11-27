import Link from 'next/link'
import {
  Box,
  Stack,
  Flex,
  Menu,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AiFillHome } from 'react-icons/ai'

const LinkItem = ({ href, children }) => {
  return <Link href={href}>{children}</Link>
}

function MenuItem({ href, children }) {
  // TODO: Add hover effect
  return (
    <Link href={href} style={{ padding: '6px 12px', textAlign: 'left' }}>
      {children}
    </Link>
  )
}
const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={10}
    >
      <Box
        display="flex"
        p={2}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mx={5}>
          <Link href="/">
            <IconButton icon={<AiFillHome />} variant="unstyled" size="lg" />
          </Link>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          gap={4}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/about">About</LinkItem>
          <LinkItem href="/resume">Resume</LinkItem>
          <LinkItem href="/projects">Projects</LinkItem>
          <LinkItem href="/posts">Posts</LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label="Options"
                variant="unstyled"
                size="lg"
              />
              <MenuList display="flex" flexDirection="column" spacing={4}>
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="/about">About</MenuItem>
                <MenuItem href="/resume">Resume</MenuItem>
                <MenuItem href="/projects">Projects</MenuItem>
                <MenuItem href="/posts">Posts</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
