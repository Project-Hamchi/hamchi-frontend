import { configurestore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { userSlice } from './userSlice';

const middleware = [ReduxThunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = configurestore({
  reducer: userSlice.reducer,
});

export default store;
