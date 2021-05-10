import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postAPI from '../api/post';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (pageData, thunkAPI) => {
    try {
      const response = await postAPI.fetchPosts(pageData);

      if (response.code === 200) {
        // await Keychain.setGenericPassword(
        //   currentUser.email,
        //   currentUser.password
        // );
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response);
      }
    } catch (err) {
      throw err;
    }
  }
);

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    page: null,
    limit: 10,
    posts: [],
    isFetching: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.page = payload.currentPage;
      state.posts.push(payload.posts);
    },
    [fetchPosts.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchPosts.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});
