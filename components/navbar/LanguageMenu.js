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
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useTranslation from '../../hooks/useTranslation';
import { TbLanguage } from 'react-icons/tb';

const LanguageItem = ({ value, changeLanguage, current, children }) => {
  const isCurrent = current === value;
  const color = useColorModeValue('pink.600', 'white');
  const hoverColor = useColorModeValue('white', 'blackAlpha.900');
  return (
    <MenuItem
      border={isCurrent && '2px solid'}
      borderRadius={10}
      _hover={
        !isCurrent && {
          bg: color,
          color: hoverColor
        }
      }
      color={color}
      onClick={changeLanguage}
      value={value}>
      {children}
    </MenuItem>
  );
};

const LanguageMenu = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

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
        aria-label={t('language')}
      />
    ),
    md: (
      <MenuButton
        as={Button}
        variant='outline'
        aria-label={t('language')}
        leftIcon={<Icon as={TbLanguage} />}
        rightIcon={<ChevronDownIcon />}>
        {t('language')}
      </MenuButton>
    )
  });

  return (
    <Box ml={2} display={{ base: 'inline-block' }}>
      <Menu>
        {menuButton}
        <MenuList bg={useColorModeValue('white', 'blackAlpa.100')} >
          <LanguageItem
            changeLanguage={changeLanguage}
            current={router.locale}
            value='es'>
            Español
          </LanguageItem>
          <LanguageItem
            changeLanguage={changeLanguage}
            current={router.locale}
            value='en'>
            English
          </LanguageItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageMenu;
