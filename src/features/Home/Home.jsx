import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://www.reddit.com/r/pics.json');
      const json = await response.json();
      setPosts(json.data.children);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post key={post.data.id} post={post} />
      ))}
    </>
  );
};

export default Home;
