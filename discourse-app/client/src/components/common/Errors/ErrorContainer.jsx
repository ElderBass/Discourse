import React from 'react';
import styles from './ErrorContainer.module.css'


const ErrorContainer = (props) => {

  const { errors } = props;

  return (
    <div className={styles.errorContainer}>
      Error: Something went wrong bro.
    </div>
  );
}


export default ErrorContainer;