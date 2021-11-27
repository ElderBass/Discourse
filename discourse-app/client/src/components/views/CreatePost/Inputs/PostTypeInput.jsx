import React from 'react';

import styles from './PostTypeInput.module.css'

const PostTypeInput = (props) => {
  const { value, onChange, onClickNext } = props;

  return (
    <div className={styles.inputField}>
      <label className={styles.label} htmlFor='postType'>Post Type: <br /> What is the main topic of conversation? </label>
      <input
        id='postTypeInput'
        className={styles.input}
        name='postType'
        value={value}
        onChange={onChange}
        placeholder='question/hypothesis/observation'
      />
    </div>
  );
}

export default PostTypeInput;