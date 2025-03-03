import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface UiState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  loading: boolean;
}

const initialState: UiState = {
  sidebarOpen: false,
  theme: 'light',
  loading: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarOpen, setTheme, setLoading } = uiSlice.actions;

// Selectors
export const selectSidebarOpen = (state: RootState) => state.ui.sidebarOpen;
export const selectTheme = (state: RootState) => state.ui.theme;
export const selectLoading = (state: RootState) => state.ui.loading;

export default uiSlice.reducer;
