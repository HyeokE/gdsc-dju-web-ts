import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
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
  document.getElementById('root'),
);
