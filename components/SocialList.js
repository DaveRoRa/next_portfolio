import { memo } from 'react';
import {
  Icon,
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  Link,
  useBreakpointValue
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';

const ColoredIcon = ({ ...props }) => {
  return <SocialIcon bgColor={useColorModeValue('#B83280', 'white')} {...props} />;
};

const ListContact = ({ href, text, network }) => {
  return (
    <GridItem
      display='flex'
      alignItems='center'
      justifyItems='center'
      flexDir={useBreakpointValue({
        base: 'column',
        sm: 'row'
      })}>
      <Icon
        as={ColoredIcon}
        network={network}
        mr={useBreakpointValue({
          base: undefined,
          sm: 3
        })}
      />
      <Link
        textShadow={useColorModeValue(
          undefined,
          '-1px 0 1px white, 0 1px 1px white, 1px 0 1px white, 0 -1px 1px white'
        )}
        p={2}
        href={href}
        target='_blank'>
        {text}
      </Link>
    </GridItem>
  );
};

const SocialList = () => {
  return (
    <Box
      width='100%'
      mt={5}
      color={useColorModeValue('pink.600', 'black')}
      fontWeight={500}>
      <Grid gap={3} mx={5}>
        <ListContact
          href='https://t.me/boostlearning95'
          network='telegram'
          text='Telegram'
        />
        <ListContact
          href='https://wa.me/+5358207246'
          network='whatsapp'
          text='Whatsapp'
        />
        <ListContact
          href='www.linkedin.com/in/david-rodriguez-ramirez'
          network='linkedin'
          text='LinkedIn'
        />
      </Grid>
    </Box>
  );
};

export default memo(SocialList);
