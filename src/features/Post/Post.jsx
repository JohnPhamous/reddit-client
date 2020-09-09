import React from 'react';
import './Post.css';
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
} from 'react-icons/ti';
import timeAgo from '../../utils/timeAgo';

const Post = (props) => {
  const { post } = props;
  const { data } = post;

  return (
    <article className="post" key={data.id}>
      <div className="post-votes-container">
        <TiArrowUpOutline className="post-votes-action" />
        <p className="post-votes-value">{data.ups}</p>
        <TiArrowDownOutline className="post-votes-action" />
      </div>
      <div className="post-container">
        <h3 className="post-title">{data.title}</h3>

        <div className="post-image-container">
          <img src={data.url} alt="" className="post-image" />
        </div>

        <div className="post-details">
          <span>
            Posted by <span className="author-username">{data.author}</span>
          </span>
          <span>{timeAgo(data.created)} ago</span>
          <span>{data.num_comments}</span>
        </div>
      </div>
    </article>
  );
};

export default Post;
