import React from 'react';

import styles from './Post.module.css';

const Post = (props) => {
  console.log('\n \n props = ', props, '\n \n');
  const {
    title,
    author,
    postId,
    userId,
    description,
    body,
    likes,
    comments,
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