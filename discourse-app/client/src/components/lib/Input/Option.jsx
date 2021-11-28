import React from 'react';

// import styles from './Option.module.css';

const Option = (props) => {
  const { style, value } = props;

  return (
    <option className={style} value={value}>{value}</option>
  );
}


export default Option;