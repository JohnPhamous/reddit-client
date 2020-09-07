import React, { useState, useEffect } from 'react';

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
        <article key={post.data.id}>
          <h3>{post.data.title}</h3>
          <img src={post.data.thumbnail} alt="" />
          <p>{post.data.author}</p>
          <p>Comments: {post.data.num_comments}</p>
          <p>{new Date(post.data.created).toDateString()}</p>
          <p>Upvotes: {post.data.ups}</p>
        </article>
      ))}
    </>
  );
};

export default Home;
