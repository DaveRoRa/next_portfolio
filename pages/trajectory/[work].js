import { Badge, Container, Text } from '@chakra-ui/react';
import { Title, WorkImage } from '../../components/Work';
import Article from '../../components/layout/Article';
import useLocale from '../../hooks/useLocale';
import { useMemo } from 'react';
import { cubaCelThumb, mariloginsaThumb, ceibalThumb } from '../trajectory';
import IconList from '../../components/IconList';

const WorkPage = ({ workId }) => {
  const t = useLocale();

  const work_info = useMemo(
    () => ({
      cuba_celebrity: {
        title: 'Cuba Celebrity',
        sub: t.cubaCelebritySub,
        image: cubaCelThumb,
        list: [
          t.cubaCelebrityListElement1,
          t.cubaCelebrityListElement2,
          t.cubaCelebrityListElement3
        ]
      },
      mariloginsa: {
        title: 'Mariloginsa TM',
        sub: t.frontEndDeveloper,
        image: mariloginsaThumb,
        list: [
          t.mariloginsaListElement1,
          t.mariloginsaListElement2,
          t.mariloginsaListElement3,
          t.mariloginsaListElement4
        ]
      },
      ceibal_plan: {
        title: t.ceibalPlan,
        sub: t.frontEndDeveloper,
        image: ceibalThumb,
        list: [t.ceibalListElement1, t.ceibalListElement2]
      }
    }),
    [t]
  );

  return (
    <Article title={work_info[workId].title}>
      <Container>
        <Title>{work_info[workId].title}</Title>
        <Text fontSize='lg' mb={2} fontWeight='semibold'>
          {t.workedAs}
          <Badge fontSize={13}>{work_info[workId].sub}</Badge>:
        </Text>
        <IconList list={work_info[workId].list} />
        <WorkImage alt={work_info[workId].title} src={work_info[workId].image} />
      </Container>
    </Article>
  );
};

export async function getStaticPaths({ locales }) {
  const works_array = ['mariloginsa', 'ceibal_plan', 'cuba_celebrity'];
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
