import React from 'react';

import styles from './FormActions.module.css';

const FormActions = (props) => {
  const {
    cancelText,
    confirmText,
    onCancel,
    onConfirm,
  } = props;

  return (
    <div className={styles.actions}>
      <h3 className={styles.submitButton} onClick={onConfirm}>{confirmText}</h3>
      <button className={styles.cancelButton} onClick={onCancel} type='button'>{cancelText}</button>
    </div>
  );
}


export default FormActions;