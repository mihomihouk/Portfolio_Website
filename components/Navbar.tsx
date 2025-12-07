'use client'
import Link from 'next/link'
import { Box, Stack, Flex, Menu, IconButton, Portal } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AiFillHome } from 'react-icons/ai'
import { navRoutes } from '../utils/path'

const LinkItem = ({ href, children }) => {
  return <Link href={href}>{children}</Link>
}

function MenuItem({ href, title }) {
  // TODO: Add hover effect
  return (
    // @ts-expect-error - Menu.Item not typed but works in runtime
    <Menu.Item value={title}>
      <a href={href} style={{ width: '100%' }}>
        {title}
      </a>
    </Menu.Item>
  )
}
export const Navbar = () => {
  const menuItems = navRoutes.filter((route)=>route.name !== 'Home')
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
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mx={5}>
          <Link href="/">
            <IconButton variant="ghost" size="lg">
              <AiFillHome />
            </IconButton>
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
          {menuItems.map((routeItem, index)=>(
            <LinkItem key={index} href={routeItem.path}>{routeItem.name}</LinkItem>
          ))}
        </Stack>
        <Box flex={1} textAlign="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu.Root id="navbar-menu">
              {/* @ts-expect-error - asChild not typed but works in runtime */}
              <Menu.Trigger asChild>
                <IconButton variant="ghost" size="lg">
                  <HamburgerIcon />
                </IconButton>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                  {menuItems.map((routeItem, index)=>(
                    <MenuItem key={index} href={routeItem.path} title={routeItem.name} />
                  ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
