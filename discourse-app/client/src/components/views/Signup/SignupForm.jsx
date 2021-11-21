import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SignupForm.module.css';

const SignupForm = (props) => {

	const { onSubmit } = props;
	const [formValues, setFormValues] = useState({
		username: '',
		password: '',
		confirmPassword: '',
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

		console.log('\n form values = ', formValues, '\n \n');
		onSubmit(formValues);
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};

	const handleCancelSignup = () => {
		history.push('/');
	};

	return (
		<form className={styles.signupForm} onSubmit={submitHandler}>
			<div className={styles.inputField}>
				<label className={styles.label} htmlFor='username'>Username</label>
				<input className={styles.input} name='username' value={formValues.username} onChange={onChange} id='username' type='text' />
			</div>
			<div className={styles.inputField}>
				<label className={styles.label} htmlFor='password'>Password</label>
				<input className={styles.input} name='password' value={formValues.password} onChange={onChange} id='username' type='password' />
			</div>
			<div className={styles.inputField}>
				<label className={styles.label} htmlFor='confirmPassword'>Confirm Password</label>
				<input className={styles.input} name='confirmPassword' value={formValues.confirmPassword} onChange={onChange} id='username' type='password' />
			</div>
			<div className={styles.actions}>
				<h3 className={styles.confirmButton} onClick={handleFormSubmit}>Confirm</h3>
				<button className={styles.cancelButton} onClick={handleCancelSignup} type='button'>Cancel</button>

			</div>
		</form>

	);
}

export default SignupForm;