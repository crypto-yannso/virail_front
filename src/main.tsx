import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initThemeLoader } from './utils/themeLoader';

// Initialiser le chargement du thème avant le rendu
initThemeLoader();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
