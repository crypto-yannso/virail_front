import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utilise localStorage par défaut
import authReducer from '../slices/authSlice';
import userReducer from '../slices/userSlice';

// Configuration de redux-persist
const persistConfig = {
  key: 'root', // Clé pour le stockage (peut être personnalisée)
  storage, // Utilise localStorage par défaut
  whitelist: ['auth', 'user'], // Liste des slices à persister
};

// Appliquer redux-persist aux reducers
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

// Configurer le store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Désactive la vérification de sérialisation pour redux-persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Créer le persistor
export const persistor = persistStore(store);

// Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;