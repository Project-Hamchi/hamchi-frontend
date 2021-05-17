import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { userSlice } from './userSlice';
import { postSlice } from './postSlice';
import { createLogger } from 'redux-logger';

const middleware = [ReduxThunk
  , createLogger()
];

const store = configureStore({
  reducer:
  {
    user: userSlice.reducer,
    post: postSlice.reducer
  },
  middleware: middleware
});

export default store;
