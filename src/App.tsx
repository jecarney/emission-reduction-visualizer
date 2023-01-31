import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import ChartConfig from './components/ChartConfig/ChartConfig';
import './App.css';
import theme from './themes/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ChartConfig />
    </ThemeProvider>
  );
};

export default App;
