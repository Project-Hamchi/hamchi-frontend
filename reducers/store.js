import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { userSlice } from './userSlice';

const middleware = [ReduxThunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = configureStore({
  reducer: userSlice.reducer,
});

export default store;
