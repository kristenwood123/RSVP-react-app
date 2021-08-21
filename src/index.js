import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider, useAuthGlobal } from './contexts/AuthContext';
import { AppProvider } from './contexts/context'

ReactDOM.render(
  <AppProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AppProvider>,
    document.getElementById('root')
);


