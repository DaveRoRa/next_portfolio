import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import { WorkGridItem } from '../components/GridItem';
import Section from '../components/Section';
import Article from '../components/layout/Article';
import useLocale from '../hooks/useLocale';

export const cubaCelThumb = '/images/CubaCelebrity_Logo.png';
export const mariloginsaThumb = '/images/MariloginsaTM_Logo.png';
export const ceibalThumb = '/images/PlanCeibal_Logo.png';

const WorksPage = () => {
  const t = useLocale();

  return (
    <Article>
      <Container>
        <Heading as='h3' align='center' fontSize={20} mb={4}>
          {t.workHistory}
        </Heading>
        <SimpleGrid columns={[1, null, null, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id='mariloginsa'
              title='Mariloginsa TM'
              thumbnail={mariloginsaThumb}>
              {t.mariloginsaThumbDescription}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id='ceibal_plan'
              title={t.ceibalPlan}
              thumbnail={ceibalThumb}>
              {t.ceibalThumbDescription}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as='h3' align='center' fontSize={20} mb={4}>
            {t.oldWorks}
          </Heading>
          <SimpleGrid columns={[1, null, null, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id='cuba_celebrity'
                title='Cuba Celebrity'
                thumbnail={cubaCelThumb}>
                {t.cubaCelebrityThumbDescription}
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Article>
  );
};

export default WorksPage;
