import { memo } from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';
import ProfilePic from '../components/ProfilePic';
import Section, { Paragraph } from '../components/Section';
import BioSection from '../components/BioSection';

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
        <ProfilePic />
      </Box>
      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>Paragraph</Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection />
      </Section>
    </Container>
  );
}

export default memo(Main);
