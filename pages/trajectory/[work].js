import { Container } from '@chakra-ui/react';
import useTranslation from '../../hooks/useTranslation';
import Trans from 'next-translate/Trans';
import { Title, WorkImage } from '../../components/Work';
import Article from '../../components/layout/Article';
import { useMemo } from 'react';
import { cubaCelThumb, mariloginsaThumb, ceibalThumb, collegeThumb } from '../trajectory';
import IconList from '../../components/IconList';
import ExternalLink from '../../components/ExternalLink';

const WorkPage = ({ workId }) => {
  const { t } = useTranslation('[work]');

  const work_info = useMemo(
    () => ({
      cuba_celebrity: {
        title: 'Cuba Celebrity',
        sub: t('cubaCelebritySub'),
        image: cubaCelThumb,
        list: [
          <Trans
            key='cc1'
            i18nKey='[work]:cubaCelebrityListElement1'
            components={{
              l1: <ExternalLink href='https://qvapay.com' />,
              l2: <ExternalLink href='https://www.paypal.com/' />,
              l3: <ExternalLink href='https://mailchimp.com/' />
            }}
          />,
          <Trans
            key='cc2'
            i18nKey='[work]:cubaCelebrityListElement2'
            components={{
              l1: <ExternalLink href='https://reactjs.org/' />,
              l2: <ExternalLink href='https://v2.grommet.io/' />
            }}
          />,
          <Trans
            key='cc3'
            i18nKey='[work]:cubaCelebrityListElement3'
            components={{
              l1: <ExternalLink href='https://strapi.io/' />,
              l2: <ExternalLink href='https://graphql.org/' />
            }}
          />
        ]
      },
      mariloginsa: {
        title: 'Mariloginsa TM',
        sub: t('frontEndDeveloper'),
        image: mariloginsaThumb,
        list: [
          <Trans
            key='m1'
            i18nKey='[work]:mariloginsaListElement1'
            components={{
              l1: <ExternalLink href='https://reactjs.org/' />,
              l2: <ExternalLink href='https://getbootstrap.com/' />,
              l3: <ExternalLink href='https://reactstrap.github.io/' />
            }}
          />,
          <Trans
            key='m2'
            i18nKey='[work]:mariloginsaListElement2'
            components={{
              l1: <ExternalLink href='https://redux.js.org/' />
            }}
          />,
          t('mariloginsaListElement3'),
          t('mariloginsaListElement4')
        ]
      },
      ceibal_plan: {
        title: t('ceibalPlan'),
        sub: t('frontEndDeveloper'),
        image: ceibalThumb,
        list: [
          <Trans
            key='cp1'
            i18nKey='[work]:ceibalListElement1'
            components={{
              l1: <ExternalLink href='https://reactjs.org/' />,
              l2: <ExternalLink href='https://mui.com/' />
            }}
          />,
          <Trans
            key='cp2'
            i18nKey='[work]:ceibalListElement2'
            components={{
              l1: <ExternalLink href='https://handlebarsjs.com/' />
            }}
          />,
          <Trans
            key='cp3'
            i18nKey='[work]:mariloginsaListElement2'
            components={{
              l1: <ExternalLink href='https://redux.js.org/' />
            }}
          />
        ]
      },
      college: {
        title: t('collegeTitle'),
        sub: t('collegeSub'),
        image: collegeThumb,
        list: [
          t('collegeListElement1'),
          t('collegeListElement2'),
          t('collegeListElement3'),
          t('collegeListElement4')
        ]
      }
    }),
    [t]
  );

  return (
    <Article title={work_info[workId].title}>
      <Container>
        <Title>{work_info[workId].title}</Title>
        <IconList header={<>{work_info[workId].sub}:</>} list={work_info[workId].list} />
        <WorkImage alt={work_info[workId].title} src={work_info[workId].image} />
      </Container>
    </Article>
  );
};

export async function getStaticPaths({ locales }) {
  const works_array = ['mariloginsa', 'ceibal_plan', 'cuba_celebrity', 'college'];
  const paths = locales.flatMap((locale) =>
    works_array.map((work) => ({
      params: {
        work
      },
      locale
    }))
  );
  return {
    fallback: false,
    paths
  };
}

export async function getStaticProps(context) {
  const workId = context.params.work;
  return { props: { workId } };
}

export default WorkPage;
