import React from 'react';
import './Post.css';
import timeAgo from '../../utils/timeAgo';

const Post = (props) => {
  const { post } = props;
  const { data } = post;

  return (
    <article className="post" key={data.id}>
      <img src={data.thumbnail} alt="" />
      <h3>{data.title}</h3>

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
