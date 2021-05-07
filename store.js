import { configurestore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [ReduxThunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = configurestore({
  reducer: rootReducer,
  middleware: middleware
});

export default store;
