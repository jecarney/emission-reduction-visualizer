import { createTheme } from '@mui/material/styles';

const theme = {
  palette: {
    text: {
      primary: 'white',
    },
    background: {
      default: '#0b505b',
    },
  },
} as const;

type CustomTheme = {
  [Key in keyof typeof theme]: (typeof theme)[Key];
};

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export default createTheme(theme);
