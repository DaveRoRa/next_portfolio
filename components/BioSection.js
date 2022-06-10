import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const bioMessages = [
  { year: 1995, description: 'Born' },
  { year: 2000, description: 'Elementary School' }
];

const BioDescription = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

const BioSection = () =>
  bioMessages.map((item, i) => (
    <BioDescription key={i}>
      <BioYear>{item.year}</BioYear>
      {item.description}
    </BioDescription>
  ));

export default BioSection;
