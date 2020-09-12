import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';

export default configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
  }),
});
