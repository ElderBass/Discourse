import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from '../../lib/Form/Form';
import FormActions from '../../lib/Form/FormActions';
import Input from '../../lib/Input/Input';
import styles from './LoginForm.module.css';

const LoginForm = (props) => {

	const { onSubmit, ref } = props;
	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	});

	const history = useHistory();

	const onChange = e => {
		setFormValues((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		console.log('\n form values in login = ', formValues, '\n \n');
		onSubmit(e, formValues);
    setFormValues({});
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};

	const handleCancelLogin = () => {
		history.push('/');
	};

  const inputClasses = {
    inputField: styles.inputField,
    input: styles.input,
    label: styles.label,
    sethShouldFuckOff: true,
  }

	return (
		<Form ref={ref} classes={styles.loginForm} onSubmit={submitHandler}>
      <Input
        classes={inputClasses}
        id='email'
        label='Email'
        name='email'
        onChange={onChange}
        placeholder='valid email address'
        type='text'
        value={formValues.email}
      />
      <Input
        classes={inputClasses}
        id='login-password'
        label='Password'
        name='password'
        onChange={onChange}
        placeholder='enter password'
        type='password'
        value={formValues.password}
      />
      <div>
        <Link to='/signup'>
          <h3>Not a member? <span className={styles.signupSpan}>Signup</span></h3>
        </Link>
      </div>
      <FormActions
        cancelText='Cancel'
        confirmText='Login'
        onCancel={handleCancelLogin}
        onConfirm={handleFormSubmit}
      />
		</Form>
	);
}

export default LoginForm;