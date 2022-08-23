import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';

const BioDescription = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

const NumberBio = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

const BioSection = () => {
  const { t } = useTranslation('home');
  const bioMessages = [t('key1'), t('key2'), t('key3'), t('key4')];
  return bioMessages.map((item, i) => (
    <BioDescription key={i}>
      <NumberBio>●</NumberBio>
      {item}
    </BioDescription>
  ));
};

export default BioSection;
