import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../components/Fonts';
import Layout from '../components/layout/Layout';
import theme from '../libs/theme';
import { AnimatePresence } from 'framer-motion';

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
