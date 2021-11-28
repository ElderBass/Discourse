import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Form from '../../lib/Form/Form';
import ErrorContainer from '../../common/Errors/ErrorContainer';
import TitleInput from './Inputs/TitleInput';
import PostTypeInput from './Inputs/PostTypeInput';
import DescriptionInput from './Inputs/DescriptionInput';
import BodyInput from './Inputs/BodyInput';
import ConfirmInput from './Inputs/ConfirmInput';
// import styles from './CreatePostForm.module.css';

const CreatePostForm = (props) => {
  const { onSubmit } = props;
  const [error, setError] = useState('');
  const [showInput, setShowInput] = useState({
    title: true,
    description: false,
    postType: false,
    body: false,
    confirm: false,
  });

  const FORM_STATE = {
    title: '',
    postType: '',
    description: '',
    body: ''
  };

  const history = useHistory();

  const [formValues, setFormValues] = useState(FORM_STATE);

  const onChangeHandler = e => {
    console.log('\n e.target.name = ', e.target.name, '\n ');
      setFormValues(preValues => ({
        ...preValues,
        [e.target.name]: e.target.value,
      }));
  };

  const showHideHandler = (showHideObject) => {
    setShowInput(prevState => ({
      ...prevState,
      ...showHideObject,
    }));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  const handleFormSubmit = async () => {
    const result = await onSubmit(formValues);
    console.log('\n \n result in handle form submit create post ', result, '\n \n');
    if (result.isSuccess) {
      setFormValues(FORM_STATE);
      setError('');
      history.push('/');
      return;
    } else {
      setError(result.error);
    }
  };

  const handleCancelSubmit = () => {
    setFormValues(FORM_STATE);
    history.push('/');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      {error.length > 0 && <ErrorContainer errors={error} />}
      {showInput.title &&
        <TitleInput
          onShowHide={showHideHandler}
          value={formValues.title}
          onChange={onChangeHandler}
        />
      }
      {showInput.description &&
        <DescriptionInput
          onShowHide={showHideHandler}
          value={formValues.description}
          onChange={onChangeHandler}
        />
      }
      {showInput.postType &&
        <PostTypeInput
          onShowHide={showHideHandler}
          value={formValues.postType}
          onChange={onChangeHandler}
        />
      }
      {showInput.body &&
        <BodyInput
          onShowHide={showHideHandler}
          value={formValues.body}
          onChange={onChangeHandler}
        />
      }
      {showInput.confirm &&
        <ConfirmInput
          formValues={formValues}
          onCancel={handleCancelSubmit}
          onConfirm={handleFormSubmit}
        />
      }
    </Form>
  );
}


export default CreatePostForm;