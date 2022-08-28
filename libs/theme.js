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
      backgroundImage: mode(
        'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),' +
          ' url(/images/danny-lines-TTRNdWfY8TY-unsplash.jpg)',
        'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),' +
          ' url(/images/david-werbrouck-R_FPsOWp2r0-unsplash.jpg)'
      )(props),
      backgroundSize: 'cover',
      color: mode('blue.800', 'white')(props),
      backgroundColor: mode('rgba(1,0,135,1)', 'black')(props),
      minWidth: '370px'
    },
    'a:focus:not(:hover),button:focus:not(:hover)': {
      boxShadow: `${mode(
        '0 0 0 3px rgba(184, 50, 128, 0.6)',
        '0 0 0 3px rgba(255, 255, 255, 0.6)'
      )(props)} !important`
    },
    'input:focus-visible': {
      boxShadow: `${mode('', '0 0 0 3px rgba(255, 255, 255, 0.6)')(props)} !important`,
      borderColor: `${mode('', 'rgba(255, 255, 255, 0.6)')(props)} !important`
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
        bg: mode('blue.700', 'whiteAlpha.100')(props),
        padding: 2,
        color: 'white',
        borderRadius: 10
      })
    }
  },
  Link: {
    baseStyle: {
      textUnderLineOffset: 3
    }
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
  initialColorMode: 'light',
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
