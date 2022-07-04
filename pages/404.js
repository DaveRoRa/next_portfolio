import NextLink from 'next/link';
import { Box, Heading, Container, Text, Divider, Button } from '@chakra-ui/react';

const NotFound = () => (
  <Container>
    <Heading as='h1'>No encontrada</Heading>
    <Text>La página que está buscando no fue encontrada</Text>
    <Divider my={6} />

    <Box my={6} align='center'>
      <NextLink href='/' passHref>
        <Button colorScheme='teal'>Regresar a Inicio</Button>
      </NextLink>
    </Box>
  </Container>
);

export default NotFound;
