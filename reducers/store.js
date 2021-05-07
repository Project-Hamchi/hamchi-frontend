import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { userSlice } from './userSlice';

const middleware = [ReduxThunk];

const store = configureStore({
  reducer: { user: userSlice.reducer },
  middleware: middleware
});

export default store;
