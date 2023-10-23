import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};
const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: { default: '#BBC1C3', _dark: '#3D3E54' },
      },
    },
  },
  semanticTokens: {
    colors: {
      bgColor: { default: '#F2F4F5', _dark: '#181B24' },
      textColor: { default: '#1F2933', _dark: '#F9FAFB' },
      counterBGColor: {
        default: '#FEFEFE',
        _dark: '#272B3C',
      },
    },
  },
});

export default theme;
