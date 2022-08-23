import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w='100%' align='center'>
    <LinkBox cursor='pointer'>
      <Image
        src={thumbnail}
        alt={title}
        className='grid-item-thumbnail'
        placeholder='blur'
        width={300}
        height={300}
        blurDataURL='/images/image-blur-placeholder.png'
      />
      <LinkOverlay href={href} target='_blank'>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box
    _hover={{
      boxShadow: useColorModeValue('2xl', 'dark-2xl'),
      border: '2px solid',
      borderColor: useColorModeValue('pink.600', 'whiteAlpha.800'),
    }}
    w='100%'
    p={4}
    height='100%'
    boxShadow={useColorModeValue('lg', 'dark-lg')}
    borderRadius={10}
    align='center'>
    <NextLink href={`/trajectory/${id}`} passHref>
      <LinkBox cursor='pointer'>
        <Image
          src={thumbnail}
          alt={title}
          className='grid-item-thumbnail'
          placeholder='blur'
          width={300}
          height={300}
          blurDataURL='/images/image-blur-placeholder.png'
        />
        <LinkOverlay href={`/trajectory/${id}`}>
          <Text fontWeight={500} mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px
    }`}
  />
);
