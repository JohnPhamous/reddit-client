import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatedList } from 'react-animated-list';
import Post from '../Post/Post';
import PostLoading from '../Post/PostLoading';
import getRandomNumber from '../../utils/getRandomNumber';
import { fetchPosts } from '../../store/redditSlice';

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const { posts, isLoading, error } = reddit;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts('pics'));
  }, []);

  if (isLoading) {
    return (
      <AnimatedList animation="zoom">
        {Array(getRandomNumber(3, 10)).fill(<PostLoading />)}
      </AnimatedList>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post.data.id} post={post} />
      ))}
    </>
  );
};

export default Home;
