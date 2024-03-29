import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { GridItemStyle } from '../GridItem';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
};

const Article = ({ children, title }) => (
  <motion.article
    initial='hidden'
    animate='enter'
    exit='exit'
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}>
    <>
      {title && (
        <Head>
          <title>{title} - David Rodriguez Ramirez</title>
        </Head>
      )}
      <Box
        boxShadow={useColorModeValue('2xl', 'dark-2xl')}
        p='6'
        rounded='md'
        backdropFilter='auto'
        backdropBlur={useColorModeValue(undefined, '4px')}
        bg={useColorModeValue('white', 'blackAlpha.900')}
        mt={3}>
        {children}
      </Box>
      <GridItemStyle />
    </>
  </motion.article>
);

export default Article;
