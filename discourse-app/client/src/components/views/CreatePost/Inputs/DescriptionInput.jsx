import React from 'react';
import Input from '../../../lib/Input/Input';
import FormActions from '../../../lib/Form/FormActions';
import styles from './DescriptionInput.module.css'

const DescriptionInput = (props) => {
  const { value, onChange, onShowHide } = props;

  const propValues = {
    classes: {
      inputField: styles.inputField,
      input: styles.input,
      label: styles.label,
    },
    id: 'description',
    label: 'Description',
    labelExtension: 'Briefly describe the crux of your post (optional)',
    name: 'description',
    onChange,
    placeholder: 'limit 100 characters',
    type: 'text',
    value,
  };

  const onCancel = () => {
    const showHideObject = {
      description: false,
      postType: true,
    }
    onShowHide(showHideObject);
  };

  const onConfirm = () => {
    const showHideObject = {
      description: false,
      body: true,
    }
    onShowHide(showHideObject);
  };

  return (
    <React.Fragment>
      <Input {...propValues} />
      <FormActions
        cancelText='Back'
        confirmText='Next'
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </React.Fragment>
  );
}

export default DescriptionInput;