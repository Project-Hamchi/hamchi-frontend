
import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers/store';
import AuthNavigator from './navigations/AuthNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AuthNavigator />
    </Provider>
  );
}
