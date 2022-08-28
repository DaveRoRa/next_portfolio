import { memo } from 'react';
import {
  Container,
  Heading,
  useColorModeValue,
  Box,
  useBreakpointValue
} from '@chakra-ui/react';
import useTranslation from '../hooks/useTranslation';
import Article from '../components/layout/Article';
import SocialList from '../components/SocialList';
import EmailForm from '../components/EmailForm';

const ConditionBox = ({ children, ...rest }) => {
  const isBaseSize = useBreakpointValue({ base: true, sm: false });
  const borderColor = useColorModeValue('blue.50', 'gray.800');
  if (!isBaseSize)
    return (
      <Box
        p='25px 30px'
        borderColor={borderColor}
        borderRadius={10}
        borderStyle='solid'
        borderWidth='2px'
        {...rest}>
        {children}
      </Box>
    );
  return children;
};

const BoxContainerContact = ({ children, header, mtHeader, ...rest }) => {
  return (
    <ConditionBox {...rest}>
      <Heading
        textAlign='center'
        mt={useBreakpointValue({ base: mtHeader, sm: undefined })}
        fontSize={18}
        as='h5'
        textDecor={useBreakpointValue({ base: 'underline', sm: undefined })}>
        {header}
      </Heading>
      {children}
    </ConditionBox>
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
        <BoxContainerContact mtHeader={3} header={t('viaEmail')}>
          <EmailForm />
        </BoxContainerContact>
        <BoxContainerContact mt={7} mtHeader={9} header={t('viaSocial')}>
          <SocialList />
        </BoxContainerContact>
      </Container>
    </Article>
  );
}

export default memo(ContactPage);
