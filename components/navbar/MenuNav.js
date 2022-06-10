import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Link
} from '@chakra-ui/react';
import NextLink from 'next/link';

const MenuNav = () => (
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
);

export default MenuNav;
