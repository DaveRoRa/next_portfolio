import { memo } from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';

function Main() {
  return (
    <Container>
      <Box borderRadius='lg' bg='red' mb={6} p={3} alignItems='center'>
        Presentación personal
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-tile'>
            David Rodriguez Ramirez
          </Heading>
          <p>Descripción &quot;artística&quot;</p>
        </Box>
      </Box>
    </Container>
  );
}

export default memo(Main);
