import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import useTranslation from '../../hooks/useTranslation';
import { WorkGridItem } from '../../components/GridItem';
import Section from '../../components/Section';
import Article from '../../components/layout/Article';

export const cubaCelThumb = '/images/CubaCelebrity_Logo.png';
export const mariloginsaThumb = '/images/MariloginsaTM_Logo.png';
export const ceibalThumb = '/images/PlanCeibal_Logo.png';
export const collegeThumb = '/images/logo-cujae.png';

const TrajectoryPage = () => {
  const { t } = useTranslation('trajectory');

  return (
    <Article title={t('trajectory')}>
      <Container>
        <Heading as='h3' align='center' fontSize={20} mb={4}>
          {t('proHistory')}
        </Heading>
        <SimpleGrid columns={[1, null, null, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id='mariloginsa'
              title='Mariloginsa TM'
              thumbnail={mariloginsaThumb}>
              {t('mariloginsaThumbDescription')}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id='ceibal_plan'
              title={t('ceibalPlan')}
              thumbnail={ceibalThumb}>
              {t('ceibalThumbDescription')}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id='cuba_celebrity'
              title='Cuba Celebrity'
              thumbnail={cubaCelThumb}>
              {t('cubaCelebrityThumbDescription')}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id='college'
              title={t('collegeGraduation')}
              thumbnail={collegeThumb}>
              {t('collegeThumbDescription')}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Article>
  );
};

export default TrajectoryPage;
