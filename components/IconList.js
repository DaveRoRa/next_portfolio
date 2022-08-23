import { List, ListItem, ListIcon, Heading, useColorModeValue } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const IconList = ({ list, header, icon = CheckCircleIcon }) => {
  const color = useColorModeValue('pink.600', 'white');
  return (
    <>
      {header && (
        <Heading
          as='h4'
          borderBottom='1.5px solid'
          align='center'
          pb={1}
          mb={2}
          fontSize={20}>
          <>{header}</>
        </Heading>
      )}
      <List spacing={3} paddingLeft={4}>
        {list.map((item, i) => (
          <ListItem key={i}>
            <ListIcon color={color} as={icon} />
            <>{item}</>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default IconList;
