import { List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const IconList = ({ list, header }) => (
  <>
    <Text fontSize='lg' mb={2} fontWeight='semibold'>
      <>{header}</>
    </Text>
    <List spacing={3}>
      {list.map((item, i) => (
        <ListItem key={i}>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          <>{item}</>
        </ListItem>
      ))}
    </List>
  </>
);

export default IconList;
