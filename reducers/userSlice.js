import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../api/user';

export const fetchSignin = createAsyncThunk(
  'user/fetchSignin',
  async (loginInput, thunkAPI) => {
    try {
      const response = await userAPI.requestSignin(loginInput);
      const { appIdToken, currentUser } = response;

      if (response.code === 200) {
        // await Keychain.setGenericPassword(
        //   currentUser.email,
        //   currentUser.password
        // );
        console.log(response);
        return response.data;
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
      state.email = payload.currentUser.email;
      state.username = payload.currentUser.username;
      state.appIdToken = payload.appIdToken;
    },
    [fetchSignin.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchSignin.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});
