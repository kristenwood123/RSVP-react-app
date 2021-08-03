import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './contexts/context'

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
      </AppProvider>,
    document.getElementById('root')
);


