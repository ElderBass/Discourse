import React from 'react';

import styles from './FormActions.module.css';

const FormActions = (props) => {
  const {
    cancelText = 'Cancel',
    confirmText,
    onCancel,
    onConfirm,
  } = props;

  return (
    <div className={styles.actions}>
      <h3 className={styles.submitButton} onClick={onConfirm}>{confirmText}</h3>
      <h6 className={styles.cancelButton} onClick={onCancel} type='button'>{cancelText || 'Cancel'}</h6>
    </div>
  );
}


export default FormActions;