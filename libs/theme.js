import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  blue: {
    50: '#bbcdf9',
    100: '#94b2fc',
    200: '#6a93fc',
    300: '#3870ff',
    400: '#3468ed',
    500: '#2d5ed8',
    600: '#244eb7',
    700: '#1d3c91',
    800: '#203572',
    900: '#10245b'
  },
  whiteScales: {
    200: '#FFFFFF',
    300: '#999999'
  }
};

const styles = {
  global: (props) => ({
    body: {
      'background-image': mode(
        'url(/images/danny-lines-TTRNdWfY8TY-unsplash.jpg)',
        'url(/images/david-werbrouck-R_FPsOWp2r0-unsplash.jpg)'
      )(props),
      'background-size': 'cover',
      color: mode('blue.800', 'white')(props)
    },
    '*:focus': {
      'box-shadow': `${mode(
        '0 0 0 3px rgba(184, 50, 128, 0.6)',
        '0 0 0 3px rgba(255, 255, 255, 0.6)'
      )(props)} !important`
    },
    '*:focus:hover': {
      'box-shadow': 'none !important'
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': (props) => ({
        fontSize: 20,
        textUnderLineOffset: 6,
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        bg: mode('blue.700', 'gray.900')(props),
        padding: 2,
        color: 'white',
        borderRadius: 10
      })
    }
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderLineOffset: 3
    })
  },
  MenuList: {
    bg: 'red'
  }
};

const shadows = {
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  'dark-lg':
    '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
  'dark-2xl': '0 25px 50px -12px rgba(255, 255, 255, 0.25)'
};

const fonts = {
  heading: '"M PLUS Rounded 1c"'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
  shadows
});

export default theme;
