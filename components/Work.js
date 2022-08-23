import NextLink from 'next/link';
import { Box, Heading, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import useTranslation from '../hooks/useTranslation';

export const Title = ({ children }) => {
  const { t } = useTranslation('common');
  const isDark = useColorModeValue(false, true);

  return (
    <Box>
      <NextLink href='/trajectory' passHref>
        <Link
          fontSize={20}
          textShadow={
            isDark &&
            '-1px 0 1px white, 0 1px 1px white, 1px 0 1px white, 0 -1px 1px white'
          }
          fontWeight={500}
          color={isDark ? 'black' : 'pink.700'}>
          {t('trajectory')}
        </Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
);
