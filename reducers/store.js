import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { userSlice } from './userSlice';
import { createLogger } from 'redux-logger';

const middleware = [ReduxThunk, createLogger()];

const store = configureStore({
  reducer: { user: userSlice.reducer },
  middleware: middleware
});

export default store;
