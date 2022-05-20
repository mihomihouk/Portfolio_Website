import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AiFillHome } from 'react-icons/ai'

const LinkItem = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <Link p={2}>{children}</Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
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
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/about-me" path={path}>
            About
          </LinkItem>
          <LinkItem href="/resume" path={path}>
            Resume
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
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
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/about-me" passHref>
                  <MenuItem as={Link}>About Me</MenuItem>
                </NextLink>
                <NextLink href="/resume" passHref>
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
