import { Container } from '@chakra-ui/react';
import Trans from 'next-translate/Trans';
import { StarIcon, PlusSquareIcon } from '@chakra-ui/icons';
import IconList from '../components/IconList';
import Article from '../components/layout/Article';
import useTranslation from '../hooks/useTranslation';
import L from '../components/ExternalLink';
import Section from '../components/Section';
import React, { useMemo } from 'react';
import ExternalLink from '../components/ExternalLink';

const SkillsPage = () => {
  const { t } = useTranslation('skills');

  const masteredList = useMemo(
    () => [
      t('mastered1'),
      <Trans
        key='skm2'
        i18nKey='skills:mastered2'
        components={{
          l1: <L href='https://jquery.com/' />,
          l2: <L href='https://handlebarsjs.com/' />
        }}
      />,
      <Trans
        key='skm3'
        i18nKey='skills:mastered3'
        components={{
          l1: <L href='https://reactjs.org/' />
        }}
      />,
      <Trans
        key='skm4'
        i18nKey='skills:mastered4'
        components={{
          l1: <L href='https://mui.com/' />,
          l2: <L href='https://v2.grommet.io/' />,
          l3: <L href='https://reactstrap.github.io/' />,
          l4: <L href='https://chakra-ui.com/' />
        }}
      />,
      <Trans
        key='skm5'
        i18nKey='skills:mastered5'
        components={{
          l1: <L href='https://tailwindcss.com/' />,
          l2: <L href='https://www.styled-components.com/' />,
          l3: <L href='https://emotion.sh/docs/styled' />
        }}
      />,
      <Trans
        key='skm6'
        i18nKey='skills:mastered6'
        components={{
          l1: <L href='https://graphql.org/' />
        }}
      />,
      <Trans
        key='skm7'
        i18nKey='skills:mastered7'
        components={{
          l1: <L href='https://redux.js.org/' />
        }}
      />,
      <Trans
        key='skm8'
        i18nKey='skills:mastered8'
        components={{
          l1: <L href='https://formik.org/' />,
          l2: <L href='https://github.com/jquense/yup' />
        }}
      />
    ],
    [t]
  );

  const plusList = useMemo(
    () => [
      t('plus1'),
      <Trans
        key='spl2'
        i18nKey='skills:plus2'
        components={{
          l1: <L href='https://eslint.org/' />,
          l2: <L href='https://prettier.io/' />
        }}
      />,
      t('plus3'),
      t('plus4'),
      t('plus5'),
      t('plus6'),
      t('plus7')
    ],
    [t]
  );

  const basicList = useMemo(
    () => [
      { link: 'https://nextjs.org/', text: 'Next.js' },
      { link: 'https://strapi.io/', text: 'Strapi' },
      { link: 'https://expressjs.com/', text: 'Express' },
      { link: 'https://www.typescriptlang.org/', text: 'Typescript' },
      <Trans
        key='basic5'
        i18nKey='skills:basicTest'
        components={{
          l1: <L href='https://jestjs.io/' />,
          l2: <L href='https://pptr.dev/' />,
          l3: <L href='https://testing-library.com/docs/react-testing-library/intro/' />
        }}
      />
    ],
    []
  );

  return (
    <Article title={t('common:skills')}>
      <Container paddingTop={3}>
        <Section>
          <IconList header={t('masteredTechs')} list={masteredList} icon={StarIcon} />
        </Section>
        <Section delay={0.5}>
          <IconList
            header={t('basicKnoledge')}
            list={basicList.map((item) =>
              React.isValidElement(item) ? (
                item
              ) : (
                <ExternalLink key={item.text} href={item.link}>
                  {item.text}
                </ExternalLink>
              )
            )}
          />
        </Section>
        <Section delay={1}>
          <IconList header={t('plus')} list={plusList} icon={PlusSquareIcon} />
        </Section>
      </Container>
    </Article>
  );
};

export default SkillsPage;
