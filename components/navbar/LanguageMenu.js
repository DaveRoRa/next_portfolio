import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  useBreakpointValue
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useLocale from '../../hooks/useLocale';
import { TbLanguage } from 'react-icons/tb';

const LanguageMenu = () => {
  const router = useRouter();
  const t = useLocale();

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const menuButton = useBreakpointValue({
    base: (
      <MenuButton
        as={IconButton}
        icon={<Icon as={TbLanguage} />}
        variant='outline'
        aria-label={t.language}
      />
    ),
    md: (
      <MenuButton
        as={Button}
        variant='outline'
        aria-label={t.language}
        leftIcon={<Icon as={TbLanguage} />}
        rightIcon={<ChevronDownIcon />}>
        {t.language}
      </MenuButton>
    )
  });

  return (
    <Box ml={2} display={{ base: 'inline-block' }}>
      <Menu>
        {menuButton}
        <MenuList>
          <MenuItem onClick={changeLanguage} value='es'>
            Español
          </MenuItem>
          <MenuItem onClick={changeLanguage} value='en'>
            English
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageMenu;
