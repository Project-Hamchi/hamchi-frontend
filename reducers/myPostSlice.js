import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit';

import submissionAPI from '../api/submissions';
import postAPI from '../api/post';
import chatAPI from '../api/chat';

export const fetchPosts = createAsyncThunk(
  'myPost/fetchMyPosts',
  async () => {
  }
);

export const myPostsAdapter = createEntityAdapter({
  selectId: (post) => post._id
});

const initialState = myPostsAdapter.getInitialState({
  isLoading: true,
  isError: false,
  errorMessage: ''
});

export const myPostSlice = createSlice({
  name: 'myPost',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      postsAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

const {
  actions,
  reducer
} = myPostSlice;

export const {
} = actions;

export default reducer;

export const {
  selectById: selectPostById,
  selectIds: selectPostIds,
  selectEntities: selectPostEntities,
  selectAll: selectAllPosts,
  selectTotal: selectTotalPosts
} = myPostsAdapter.getSelectors((state) => state.post);
