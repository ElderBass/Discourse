import React from 'react';
import './ErrorContainer.module.css'


const ErrorContainer = (props) => {

  const { errors } = props;

  return (
    <div>
      Error: Something went wrong bro.
    </div>
  );
}


export default ErrorContainer;