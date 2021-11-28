import React from 'react';

import styles from './Post.module.css';

const Post = (props) => {

  const {
    title,
    author,
    body,
    // postId,
    // postType,
    // userId,
    // description,
    // likes,
    // comments,
    timestamp
  } = props;

  return (
    <div className={styles.postContainer}>
      <h1>{title}</h1>
      <h4>By {author}</h4>
      <p>Posted on {timestamp}</p>
      <p>{body}</p>
    </div>

  );
}

export default Post;