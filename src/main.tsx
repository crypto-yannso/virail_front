import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initThemeLoader } from './utils/themeLoader';
import { AuthenticatedProvider } from './providers/AuthenticatedProvider';
import UserProvider from './providers/AuthProvider';
import { AxiosProvider } from './providers/AxiosProvider';

// Initialiser le chargement du thème avant le rendu
initThemeLoader();

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <AuthenticatedProvider>
      <UserProvider>
        <AxiosProvider>
          <App />
        </AxiosProvider>
      </UserProvider>
    </AuthenticatedProvider>
  </React.StrictMode>
);
