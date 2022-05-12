import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {mono: `'Menlo', monospace`};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});

const theme = extendTheme({
  global: {
    padding: 0
  },
  config : {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    black: {
      primary: '#121417',
      secondary: '#23272D',
      100: '#1F242A',
      200: '#2E343C',
      300: '#3F4750'
    },
    yellow: {
      100: '#E2D26C',
      200: '#E7DA8B'
    },
    white: {
      100: '#F2F1EF'
    },
    blue: {
      100: '#0353e9',
      200: '#126ED1'
    },
    grey: {
      100: 'grey',
      200: '#D0D6DC'
    }
  },

  components: {
    Button: {
      baseStyle:{
        _hover: {
          opacity: 0.7,
        },
      },
      variants: {
        primary: {
          bg: 'yellow.100',
          color: 'black.primary',
        },
        secondary: {
          bg: 'black.primary',
          color: '#fff',
          border: '1px',
          borderColor: 'white.100'
        },
        twitter: {
          bg: 'blue.100',
          color: '#fff'
        },
        round:{
          borderRadius: '50%'
        }
      }
    }
  },

  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163'
    }
  }
});

export default theme;
