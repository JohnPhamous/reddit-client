import { createSlice } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../api/reddit';

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
};

const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    startGetPosts(state) {
      state.isLoading = true;
      state.error = false;
    },
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  setPosts,
  getPostsFailed,
  getPostsSuccess,
  startGetPosts,
} = redditSlice.actions;

export default redditSlice.reducer;

// This is a Redux Thunk that gets posts from a subreddit.
export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(startGetPosts());
    const posts = await getSubredditPosts(subreddit);
    dispatch(getPostsSuccess(posts));
  } catch (error) {
    dispatch(getPostsFailed());
  }
};
