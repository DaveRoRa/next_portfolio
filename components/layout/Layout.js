import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import NavBar from '../navbar/NavBar';

const main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>David Rodriguez - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default main;
