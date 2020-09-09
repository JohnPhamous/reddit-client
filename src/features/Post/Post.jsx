import React from 'react';
import './Post.css';
import timeAgo from '../../utils/timeAgo';

const Post = (props) => {
  const { post } = props;
  const { data } = post;

  return (
    <article className="post" key={data.id}>
      <h3 className="post-title">{data.title}</h3>

      <div className="post-image-container">
        <img src={data.url} alt="" className="post-image" />
      </div>

      <p>Upvotes: {data.ups}</p>
      <div className="post-details">
        <span>
          Posted by <span className="author-username">{data.author}</span>
        </span>
        <span>{timeAgo(data.created)} ago</span>
        <span>{data.num_comments}</span>
      </div>
    </article>
  );
};

export default Post;
