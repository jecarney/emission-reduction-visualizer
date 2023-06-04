/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
  typography: {
    fontFamily: 'system-ui',
  },
  palette: {
    primary: {
      main: '#aaaaaa',
      light: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      dark: '#776464',
    },
    text: {
      primary: '#6B8D8B',
      secondary: '#aaaaaa',
    },
    background: {
      default: '#ffffff',
    },
  },
});

const theme = createTheme(
  createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: { color: globalTheme.palette.primary.light },
          },
          {
            props: { variant: 'outlined' },
            style: {
              color: globalTheme.palette.text.primary,
              '&:hover': {
                backgroundColor: globalTheme.palette.secondary.dark,
                color: globalTheme.palette.secondary.main,
              },
            },
          },
          {
            props: { variant: 'selected' },
            style: {
              backgroundColor: globalTheme.palette.primary.dark,
              color: globalTheme.palette.secondary.main,
              '&:hover': {
                backgroundColor: globalTheme.palette.primary.main,
                color: globalTheme.palette.secondary.main,
              },
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
    },
  }),
  globalTheme
);

export default theme;
