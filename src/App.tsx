import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import './App.css';
import ChartConfig from './app/Chart/ChartConfig/ChartConfig';
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
