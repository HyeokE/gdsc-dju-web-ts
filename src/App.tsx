import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Main } from './components/main';
import './App.css';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
