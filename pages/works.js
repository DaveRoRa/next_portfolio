import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import { WorkGridItem } from '../components/GridItem';
import Section from '../components/Section';

const inkTumb = '/images/pokemon-scarlet-violet-pawmi.webp';

const WorksPage = () => (
  <Container>
    <Heading as='h3' align='center' fontSize={20} mb={4}>
      Works
    </Heading>
    <SimpleGrid columns={[1, null, null, 2]} gap={6}>
      <Section>
        <WorkGridItem id='inkdrop' title='Inkdrop' thumbnail={inkTumb}>
          A markdown note-taking app
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id='inkdrop' title='Inkdrop' thumbnail={inkTumb}>
          A markdown note-taking app
        </WorkGridItem>
      </Section>
    </SimpleGrid>
    <Section delay={0.4}>
      <Divider my={6} />
      <Heading as='h3' align='center' fontSize={20} mb={4}>
        Old Works
      </Heading>
    </Section>
  </Container>
);

export default WorksPage;
