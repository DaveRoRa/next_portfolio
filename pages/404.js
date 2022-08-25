import NextLink from 'next/link';
import { Box, Heading, Container, Text, Divider, Button } from '@chakra-ui/react';
import useTranslation from '../hooks/useTranslation';
import Article from '../components/layout/Article';

const NotFound = () => {
  const { t } = useTranslation('404');

  return (
    <Container>
      <Article>
        <Heading as='h1'>{t('notFound')}</Heading>
        <Text>{t('pageNotFound')}</Text>
        <Divider my={6} />

        <Box my={6} align='center'>
          <NextLink href='/' passHref>
            <Button colorScheme='teal'>{t('backHome')}</Button>
          </NextLink>
        </Box>
      </Article>
    </Container>
  );
};

export default NotFound;
