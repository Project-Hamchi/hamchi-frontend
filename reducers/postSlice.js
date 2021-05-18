import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit';
import postAPI from '../api/post';

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (page, thunkAPI) => {
    try {
      const response = await postAPI.requestGetPosts(page, []);

      if (response.data.posts.length === 0) {
        return thunkAPI.rejectWithValue();
      }

      return response.data.posts;
    } catch (err) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const postsAdapter = createEntityAdapter({
  selectId: (post) => post._id
});

const initialState = postsAdapter.getInitialState({
  page: 1,
  isScrollEnd: false,
  isFiltered: false,
  isLoading: true,
  isError: false,
  errorMessage: ''
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    initilizeFeeds(state, action) {
      return initialState
    },
    toggleFilter(state, action) {
      state.isFiltered = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.page = state.page + 1;
      postsAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isError = true;
    });
  }
});

const { actions, reducer } = postSlice;
export const { toggleFilter } = actions;
export default reducer;

export const {
  selectById: selectPostById,
  selectIds: selectPostIds,
  selectEntities: selectPostEntities,
  selectAll: selectAllPosts,
  selectTotal: selectTotalPosts
} = postsAdapter.getSelectors((state) => state.post);
