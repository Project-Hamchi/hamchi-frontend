import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { userSlice } from './userSlice';
import { postSlice } from './postSlice';
import { filteredPostSlice } from './filteredPostSlice';
import { createLogger } from 'redux-logger';

const middleware = [ReduxThunk, createLogger()];

const store = configureStore({
  reducer:
  {
    user: userSlice.reducer,
    post: postSlice.reducer,
    filteredPost: filteredPostSlice.reducer
  },
  middleware: middleware
});

export default store;
