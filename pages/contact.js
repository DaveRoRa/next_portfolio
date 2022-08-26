import { memo } from 'react';
import { Container, Heading, useColorModeValue, Box } from '@chakra-ui/react';
import useTranslation from '../hooks/useTranslation';
import Article from '../components/layout/Article';
import SocialList from '../components/SocialList';
import EmailForm from '../components/EmailForm';

const BoxContainerContact = ({ children, header, ...rest }) => {
  return (
    <Box
      p='25px 30px'
      borderColor={useColorModeValue('blue.50', 'gray.800')}
      borderRadius={10}
      borderStyle='solid'
      borderWidth='2px'
      {...rest}>
      <Heading textAlign='center' fontSize={18} as='h5'>
        {header}
      </Heading>
      {children}
    </Box>
  );
};

function ContactPage() {
  const { t } = useTranslation('contact');

  return (
    <Article>
      <Container>
        <Heading as='h3' align='center' fontSize={20} mb={4}>
          {t('common:contact')}
        </Heading>
        <BoxContainerContact header={t('viaEmail')}>
          <EmailForm />
        </BoxContainerContact>
        <BoxContainerContact mt={7} header={t('viaSocial')}>
          <SocialList />
        </BoxContainerContact>
      </Container>
    </Article>
  );
}

export default memo(ContactPage);
