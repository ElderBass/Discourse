import React from 'react';
import { useHistory } from 'react-router-dom';
import FormActions from '../../../lib/Form/FormActions';
import Input from '../../../lib/Input/Input';

import styles from './TitleInput.module.css'

const TitleInput = (props) => {
  const { onClickNext, onChange, value } = props;
  const history = useHistory();

  const propValues = {
    classes: {
      inputField: styles.inputField,
      input: styles.input,
      label: styles.label,
    },
    id: 'title',
    label: 'Give It a Title',
    name: 'title',
    onChange,
    placeholder: '(limit 30 characters)',
    type: 'text',
    value,
  };

  const onCancel = () => {
    history.push('/');
  };

  const onConfirm = () => {
    const showHideObject = {
      title: false,
      description: true,
    }
    onClickNext(showHideObject);
  }

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

export default TitleInput;