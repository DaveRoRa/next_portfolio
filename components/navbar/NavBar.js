import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import useTranslation from '../../hooks/useTranslation';
import Logo from '../Logo';
import LinkItem from './LinkItem';
import ThemeToggleButton from './ThemeToggleButton';
import MenuNav from './MenuNav';
import LanguageMenu from './LanguageMenu';

const NavBar = ({ path, ...rest }) => {
  const { t } = useTranslation('common');

  return (
    <Box
      position={'fixed'}
      as='nav'
      w='100%'
      bg={useColorModeValue('white', 'blackAlpa.100')}
      backdropFilter={useColorModeValue(undefined, 'blur(4px)')}
      zIndex={1}
      color='pink.800'
      fontWeight={500}
      boxShadow={useColorModeValue('lg', 'dark-lg')}
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
          <LinkItem href='/trajectory' path={path}>
            {t('trajectory')}
          </LinkItem>
          <LinkItem href='/skills' path={path}>
            {t('skills')}
          </LinkItem>
          <LinkItem href='/contact' path={path}>
            {t('contact')}
          </LinkItem>
        </Stack>
        <Box
          align='right'
          display='flex'
          flexDirection='row'
          alignContent='flex-end'
          alignItems='flex-end'
          alignSelf='flex-end'>
          <ThemeToggleButton />
          <LanguageMenu />
          <MenuNav path={path} />
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
