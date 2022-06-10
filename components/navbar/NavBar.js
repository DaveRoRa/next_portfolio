import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import Logo from '../logo';
import LinkItem from './LinkItem';
import ThemeToggleButton from './ThemeToggleButton';
import MenuNav from './MenuNav';

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
          <ThemeToggleButton />
          <MenuNav />
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
