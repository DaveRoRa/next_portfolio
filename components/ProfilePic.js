import { Box, Image, useColorModeValue } from '@chakra-ui/react';

const ProfilePic = () => (
  <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
    <Image
      borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.800')}
      borderWidth={2}
      borderStyle='solid'
      maxWidth='100px'
      display='inline-block'
      borderRadius='full'
      src='/images/profile_img.jpg'
      alt='Profile Image'
    />
  </Box>
);

export default ProfilePic;
