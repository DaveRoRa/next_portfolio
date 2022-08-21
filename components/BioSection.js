import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import useLocale from '../hooks/useLocale';

const BioDescription = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

const NumberBio = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

const BioSection = () => {
  const t = useLocale();
  const bioMessages = [t.key1, t.key2, t.key3, t.key4];
  return bioMessages.map((item, i) => (
    <BioDescription key={i}>
      <NumberBio>●</NumberBio>
      {item}
    </BioDescription>
  ));
};

export default BioSection;
