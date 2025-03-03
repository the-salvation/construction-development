import { combineReducers } from '@reduxjs/toolkit';

import uiReducer from './uiSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  // Add other reducers here
});

export default rootReducer;
