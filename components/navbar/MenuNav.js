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
import useLocale from '../../hooks/useLocale';

const MenuNav = () => {
  const t = useLocale();

  return (
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
            <MenuItem as={Link}>{t.aboutMe}</MenuItem>
          </NextLink>
          <NextLink href='/trajectory' passHref>
            <MenuItem as={Link}>{t.trajectory}</MenuItem>
          </NextLink>
          <NextLink href='/skills' passHref>
            <MenuItem as={Link}>{t.skills}</MenuItem>
          </NextLink>
        </MenuList>
      </Menu>
    </Box>
  );
};
export default MenuNav;
