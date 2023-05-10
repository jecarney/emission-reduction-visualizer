import { createTheme } from '@mui/material/styles';

const theme = {
  palette: {
    text: {
      primary: '#007791',
      light: '#f5f5dc',
    },
    background: {
      default: '#f5f5dc',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'selected' },
          style: {
            color: '#f5f5dc',
            border: '1px solid #f5f5dc',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: '#56A0CA',
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          margin: '5px 0',
        },
      },
      variants: [
        {
          props: { variant: 'selected' },
          style: {
            backgroundColor: '#56A0CA',
            color: '#f5f5dc',
          },
        },
      ],
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '15px 0',
        },
      },
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
