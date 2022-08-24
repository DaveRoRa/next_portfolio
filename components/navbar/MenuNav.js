import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import useTranslation from '../../hooks/useTranslation';

const MenuLink = ({ href, children, path }) => {
  const active = path === href;
  const hoverBg = useColorModeValue('pink.600', 'whiteAlpha.900');
  const hoverColor = useColorModeValue('white', 'black');
  const color = useColorModeValue('pink.700', 'white');
  return (
    <NextLink href={href} passHref>
      <MenuItem
        _hover={
          !active && {
            bg: hoverBg,
            color: hoverColor
          }
        }
        border={active && '2px solid'}
        color={color}
        borderRadius={10}
        as={Link}>
        {children}
      </MenuItem>
    </NextLink>
  );
};

const MenuNav = ({ path }) => {
  const { t } = useTranslation('common');

  return (
    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant='outline'
          aria-label='Options'
        />
        <MenuList bg={useColorModeValue('white', 'black')}>
          <MenuLink path={path} href='/'>
            {t('aboutMe')}
          </MenuLink>
          <MenuLink path={path} href='/trajectory'>
            {t('trajectory')}
          </MenuLink>
          <MenuLink path={path} href='/skills'>
            {t('skills')}
          </MenuLink>
        </MenuList>
      </Menu>
    </Box>
  );
};
export default MenuNav;
