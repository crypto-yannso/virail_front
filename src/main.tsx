import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initThemeLoader } from './utils/themeLoader';
import { AuthenticatedProvider } from './providers/AuthenticatedProvider';
import UserProvider from './providers/AuthProvider';
import { AxiosProvider } from './providers/AxiosProvider';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

// Initialiser le chargement du thème avant le rendu
initThemeLoader();

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <AuthenticatedProvider>
      {/* <UserProvider> */}
        {/* <AxiosProvider> */}
       
        <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
                 
        {/* </AxiosProvider> */}
      {/* </UserProvider> */}
    </AuthenticatedProvider>
  </React.StrictMode>
);
