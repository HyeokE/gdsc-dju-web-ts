import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 auto',
            minHeight: '100vh',
          }}
        >
          <App />
        </div>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
