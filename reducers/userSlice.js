import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import userAPI from '../api/user';


const rememberCredentials = async (credentials) => {
  try {
    await SecureStore.setItemAsync(
      'userCredentials',
      JSON.stringify(credentials)
    );
  } catch (err) {
    console.log(err);
  }
};

const readCredentials = async () => {
  try {
    const credentials = await SecureStore.getItemAsync('userCredentials');

    if (credentials) {
      const parsedCredentials = JSON.parse(credentials);
      return parsedCredentials;
    }
  } catch (err) {
    console.log(err);
  }
};

const clearCredentials = async () => {
  try {
    await SecureStore.deleteItemAsync('userCredentials');
  } catch (err) {
    console.log(err);
  }
};

export const fetchSignin = createAsyncThunk(
  'user/fetchSignin',
  async (loginInput, thunkAPI) => {
    if (!loginInput) {
      loginInput = await readCredentials();
    }

    try {
      const response = await userAPI.requestSignin(loginInput);

      if (response.code === 200) {
        rememberCredentials({
          email: loginInput.email,
          password: loginInput.password
        });

        return response.data;
      } else {
        await clearCredentials();
        return thunkAPI.rejectWithValue(response);
      }
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: '',
    username: '',
    email: '',
    appIdToken: '',
    isFetching: false,
    isSignedIn: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
  },
  extraReducers: {
    [fetchSignin.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSignedIn = true;
      state.userId = payload.currentUser._id;
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
