import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './App.css';
import Layout from './Layout';
import GoogleSpinner from './components/Lottie/GoogleSpinner';
import { AnimatePresence } from 'framer-motion';
import Alert from './components/common/Alert';
import Navigation from './components/common/navigation/DeskNavigation';
import { Footer } from './components/common/Footer';
import { useRecoilValue } from 'recoil';
import { alertState } from './store/alert';
import { loaderState } from './store/loader';

function App() {
  const alert = useRecoilValue(alertState);
  const loading = useRecoilValue(loaderState);
  return (
    <ThemeProvider theme={theme}>
      {loading.load && <GoogleSpinner background={true} />}
      <AnimatePresence>{alert.alertHandle && <Alert />}</AnimatePresence>
      <Navigation />
      <Layout />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
