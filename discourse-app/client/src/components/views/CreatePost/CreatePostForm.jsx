import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Form from '../../lib/Form/Form';
import ErrorContainer from '../../common/Errors/ErrorContainer';
import TitleInput from './Inputs/TitleInput';
import PostTypeInput from './Inputs/PostTypeInput';
import DescriptionInput from './Inputs/DescriptionInput';
import BodyInput from './Inputs/BodyInput';
import FormActions from '../../lib/Form/FormActions';
import styles from './CreatePostForm.module.css';
import ConfirmInput from './Inputs/ConfirmInput';

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
    setFormValues(preValues => ({
      ...preValues,
      [e.target.name]: e.target.value,
    }));
  };

  const clickNextHandler = (showHideObject) => {
    console.log('\n \n show hide object -= ', showHideObject, '\n \n');
    setShowInput(prevState => ({
      ...prevState,
      ...showHideObject,
    }));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  const handleFormSubmit = () => {
    onSubmit(formValues);
    setFormValues(FORM_STATE);
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
          onClickNext={clickNextHandler}
          value={formValues.title}
          onChange={onChangeHandler}
        />
      }
      {showInput.description &&
        <DescriptionInput
          onClickNext={clickNextHandler}
          value={formValues.description}
          onChange={onChangeHandler}
        />
      }
      {showInput.postType &&
        <PostTypeInput
          onClickNext={clickNextHandler}
          value={formValues.postType}
          onChange={onChangeHandler}
        />
      }
      {showInput.body &&
        <BodyInput
          onClickNext={clickNextHandler}
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