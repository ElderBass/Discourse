import React from 'react';
import FormActions from '../../../lib/Form/FormActions';
import SelectInput from '../../../lib/Input/SelectInput';

import styles from './PostTypeInput.module.css'

const PostTypeInput = (props) => {
  const { onChange, onShowHide, value } = props;

  const inputProps = {
    id: 'postTypeInput',
    label: 'Post Type',
    labelExtension: 'Choose what kind of post this will be',
    name: 'postType',
    onChange,
    styles,
    value,
  };

  
  const onCancel = () => {
    const showHideObject = {
      postType: false,
      title: true,
    }
    onShowHide(showHideObject);
  };

  const onConfirm = () => {
    const showHideObject = {
      postType: false,
      description: true,
    }
    onShowHide(showHideObject);
  };

  return (
    <React.Fragment>
      <SelectInput {...inputProps} />
      <FormActions
        cancelText='Back'
        confirmText='Next'
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </React.Fragment>
  );
}

export default PostTypeInput;