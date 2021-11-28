import React from 'react';
import FormActions from '../../../lib/Form/FormActions';
import styles from './BodyInput.module.css'

const BodyInput = (props) => {
  const { onChange, onShowHide, value } = props;

  const onBack = () => {
    const showHideObject = {
      body: false,
      postType: true,
    }
    onShowHide(showHideObject);
  };

  const onConfirm = () => {
    const showHideObject = {
      body: false,
      confirm: true,
    }
    onShowHide(showHideObject);
  };

  return (

    <div className={styles.inputField}>
      <label className={styles.label} htmlFor='body'>Say your peace</label>
      <textarea
        className={styles.textarea}
        name='body'
        value={value}
        onChange={onChange}
      />
      <FormActions
        cancelText='Back'
        confirmText='Next'
        onCancel={onBack}
        onConfirm={onConfirm}
      />
    </div>
  );
}

export default BodyInput;