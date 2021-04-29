import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context'

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  </AppProvider>
);


