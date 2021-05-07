import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../api/user';
import * as Keychain from 'react-native-keychain';
import thunk from 'redux-thunk';

export const fetchSignin = createAsyncThunk(
  'user/fetchSignin',
  async (loginInput, thunkAPI) => {
    try {
      const response = await userAPI.requestSignin(loginInput);
      const { appIdToken, currentUser } = response;

      if (response.code === 200) {
        await Keychain.setGenericPassword(
          currentUser.email,
          currentUser.password
        );
        return response;
      } else {
        return thunkAPI.rejectWithValue(response);
      }
    } catch (err) {
      throw err;
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    appIdToken: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
  },
  extraReducers: {
    [fetchSignin.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.currentUser.email;
      state.username = payload.currentUser.username;
      state.appIdToken = payload.appIdToken;
    },
    [fetchSignin.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchSignin.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});
