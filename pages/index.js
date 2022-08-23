import { memo } from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';
import useTranslation from '../hooks/useTranslation';
import ProfilePic from '../components/ProfilePic';
import Section, { Paragraph } from '../components/Section';
import BioSection from '../components/BioSection';
import Article from '../components/layout/Article';

function MainPage() {
  const { t } = useTranslation('home');

  return (
    <Article>
      <Container>
        <Box borderRadius='lg' bg='whiteAlpha.200' mb={6} p={3} alignItems='center'>
          {t('introduction')}
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-tile'>
              David Rodriguez Ramirez
            </Heading>
            <p>{t('subIntro')}</p>
          </Box>
          <ProfilePic />
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            {t('descriptionTitle')}
          </Heading>
          <Paragraph>{t('description')}</Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            {t('keyCompetencies')}
          </Heading>
          <BioSection />
        </Section>
      </Container>
    </Article>
  );
}

export default memo(MainPage);
