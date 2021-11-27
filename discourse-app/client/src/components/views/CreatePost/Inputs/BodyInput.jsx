import React from 'react';

import styles from './BodyInput.module.css'

const BodyInput = (props) => {
  const { onChange, value } = props;

  return (

    <div className={styles.inputField}>
      <label className={styles.label} htmlFor='body'>Say your peace</label>
      <textarea
        className={styles.input}
        type='text'
        name='body'
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default BodyInput;