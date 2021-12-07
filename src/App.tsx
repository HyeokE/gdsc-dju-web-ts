import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Main } from './components/main';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
