import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import PostLoading from '../Post/PostLoading';
import getRandomNumber from '../../utils/getRandomNumber';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await fetch('https://www.reddit.com/r/pics.json');
      const json = await response.json();
      setPosts(json.data.children);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return Array(getRandomNumber(3, 10)).fill(<PostLoading />);
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
