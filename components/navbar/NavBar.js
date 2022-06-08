import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  Stack,
  useColorModeValue,
  IconButton,
  MenuList,
  MenuItem,
  Link
} from '@chakra-ui/react';
import NextLink from 'next/link';

import Logo from '../logo';
import LinkItem from './LinkItem';

const NavBar = ({ path, ...rest }) => {
  return (
    <Box
      position={'fixed'}
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...rest}>
      <Container
        display={'flex'}
        p={2}
        maxW='container.md'
        wrap='wrap'
        alignContent='center'
        justifyContent='space-between'>
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}>
          <LinkItem href='/works' path={path}>
            Works
          </LinkItem>
          <LinkItem href='/posts' path={path}>
            Posts
          </LinkItem>
        </Stack>
        <Box flex={1} align='right'>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href='/works' passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href='/Posts' passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
