import React, { useState } from 'react';
import './Post.css';
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
} from 'react-icons/ti';
import moment from 'moment';
import shortenNumber from '../../utils/shortenNumber';

const Post = (props) => {
  const [voteValue, setVoteValue] = useState(0);

  const { post } = props;
  const { data } = post;

  /**
   * @param {number} newValue The new vote value
   */
  const onHandleVote = (newValue) => {
    if (newValue === voteValue) {
      setVoteValue(0);
    } else if (newValue === 1) {
      setVoteValue(1);
    } else {
      setVoteValue(-1);
    }
  };

  const renderUpVote = () => {
    if (voteValue === 1) {
      return <TiArrowUpThick className="icon-action" />;
    }
    return <TiArrowUpOutline className="icon-action" />;
  };

  const renderDownVote = () => {
    if (voteValue === -1) {
      return <TiArrowDownThick className="icon-action" />;
    }
    return <TiArrowDownOutline className="icon-action" />;
  };

  const getVoteType = () => {
    if (voteValue === 1) {
      return 'up-vote';
    }
    if (voteValue === -1) {
      return 'down-vote';
    }

    return '';
  };

  return (
    <article className="post" key={data.id}>
      <div className="post-votes-container">
        <button
          type="button"
          className={`icon-action-button up-vote ${
            voteValue === 1 && 'active'
          }`}
          onClick={() => onHandleVote(1)}
        >
          {renderUpVote()}
        </button>
        <p className={`post-votes-value ${getVoteType()}`}>
          {shortenNumber(data.ups, 1)}
        </p>
        <button
          type="button"
          className={`icon-action-button down-vote ${
            voteValue === -1 && 'active'
          }`}
          onClick={() => onHandleVote(-1)}
        >
          {renderDownVote()}
        </button>
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
          <span>{moment.unix(data.created_utc).fromNow()}</span>
          <span className="post-comments-container">
            <button type="button" className="icon-action-button" onClick={null}>
              <TiMessage className="icon-action" />
            </button>
            {shortenNumber(data.num_comments, 1)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Post;
