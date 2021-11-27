import React from 'react';
import { useHistory } from 'react-router';
import Input from '../../../lib/Input/Input';
import FormActions from '../../../lib/Form/FormActions';
import styles from './DescriptionInput.module.css'

const DescriptionInput = (props) => {
  const { value, onChange, onClickNext } = props;
  const history = useHistory();
  const propValues = {
    classes: {
      inputField: styles.inputField,
      input: styles.input,
      label: styles.label,
    },
    id: 'description',
    label: 'Description',
    name: 'description',
    onChange,
    placeholder: 'enter description',
    type: 'text',
    value,
  };

  const onCancel = () => {
    history.push('/');
  };

  const onConfirm = () => {
    const showHideObject = {
      description: false,
      postType: true,
    }
    onClickNext(showHideObject);
  };

  return (
    <React.Fragment>
      <Input {...propValues} />
      <FormActions
        cancelText='Cancel'
        confirmText='Next'
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </React.Fragment>
  );
}

export default DescriptionInput;