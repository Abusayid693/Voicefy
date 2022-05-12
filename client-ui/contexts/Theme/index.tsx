import {
  ChakraProvider as ChakraThemeProvider,
  ColorModeProvider
} from '@chakra-ui/react';
import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import theme from 'theme';

const ThemeProvider: React.FC = ({children}) => {
  return (
    <StyledThemeProvider theme={theme}>
      <ChakraThemeProvider theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true
          }}
        ></ColorModeProvider>
        {children}
      </ChakraThemeProvider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
