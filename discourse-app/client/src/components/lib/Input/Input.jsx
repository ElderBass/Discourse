import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {

  const {
    classes = {},
    id,
    label,
    labelExtension = '',
    name,
    onChange,
    placeholder,
    type,
    value,
  } = props;
  console.log('\n label extension = ', labelExtension, '\n');
  const classNames = classes ? classes : styles;

  return (
    <div className={classNames.inputField}>
      <label
        className={classNames.label}
        htmlFor={id}
      >
        {label}
      </label>
      {labelExtension.length > 0 &&
        <div className={styles.labelExtension}>
          {labelExtension}
        </div>}
      <br />
      <input
        className={classNames.input}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
}

export default Input;