import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CreatePostContainer.module.css';

const CreatePostContainer = (props) => {

  return (
    <div className={styles.createPostContainer}>
      <Link to='/posts/create'>
        <h2 className={styles.createPostHeader}>+ Create Post</h2>
      </Link>
    </div>
  );
}

export default CreatePostContainer;