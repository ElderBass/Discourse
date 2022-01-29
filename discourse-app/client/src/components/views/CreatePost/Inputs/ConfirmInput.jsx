import React from 'react';
import store from '../../../../store';
import FormActions from '../../../lib/Form/FormActions';


import styles from './ConfirmInput.module.css'


const ConfirmInput = (props) => {
  const { formValues, onConfirm, onCancel } = props;
  const {
    title,
    description,
    postType,
    body,
  } = formValues;
  const { user } = store.getState();
  const { username } = user;

  return (
    <React.Fragment>
      <div className={styles.postInfo}>
        <h3 className={styles.h6}>Title: <span className={styles.postValue}>{title}</span></h3>
        <h6 className={styles.h6}>Author: <span className={styles.postValue}>{username}</span></h6>
        <h6 className={styles.h6}>Type:  <span className={styles.postValue}>{postType}</span></h6>
        <h6 className={styles.h6}>Description:  <span className={styles.postValue}>{description}</span></h6>
        <h6 className={styles.h6}>Body:</h6>
        <p className={styles.body}>{body}</p>
      </div>
      <FormActions
        confirmText='Submit'
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </React.Fragment>

  );
}

export default ConfirmInput;