import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apartmentsApi } from './services/apartmentsApi';
import { authApi } from './services/authApi';
import rootReducer from './slices';

export const store = configureStore({
  reducer: {
    ...rootReducer,
    [apartmentsApi.reducerPath]: apartmentsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, etc.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apartmentsApi.middleware, authApi.middleware),
});

// Optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// Create a more explicit RootState type that includes all reducers
export interface RootState {
  ui: {
    sidebarOpen: boolean;
    theme: 'light' | 'dark';
    loading: boolean;
  };
  [apartmentsApi.reducerPath]: ReturnType<typeof apartmentsApi.reducer>;
  [authApi.reducerPath]: ReturnType<typeof authApi.reducer>;
}

export type AppDispatch = typeof store.dispatch;
