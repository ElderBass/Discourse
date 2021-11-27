import React from 'react';
import styles from './Form.module.css';

const Form = (props) => {
  const {
    classes = '',
    onSubmit,
  } = props;

  const classNames = classes.length ? classes : styles.form;

  return (
    <form onSubmit={onSubmit} className={classNames}>
      {props.children}
    </form>
  );
}

export default Form;