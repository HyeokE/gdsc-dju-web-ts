import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Layout } from './Layout';
import './App.css';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
