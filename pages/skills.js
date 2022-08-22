import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Article from '../components/layout/Article';
import Section from '../components/Section';
import { GridItem } from '../components/GridItem';

const SkillsPage = () => (
  <Article title='Posts'>
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title='My fish'
            thumbnail={'/images/pokemon-scarlet-violet-pawmi.webp'}
            href='https://www.google.com'
          />
          <GridItem
            title='My fish'
            thumbnail={'/images/pokemon-scarlet-violet-pawmi.webp'}
            href='https://www.google.com'
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Article>
);

export default SkillsPage;
