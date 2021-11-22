import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = (props) => {

	const { onSubmit } = props;
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
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};

	const handleCancelLogin = () => {
		history.push('/');
	};

	return (
		<form className={styles.loginForm} onSubmit={submitHandler}>
			{/* <div className={styles.inputField}>
				<label className={styles.label} htmlFor='username'></label>
				<input className={styles.input} name='username' value={formValues.username} onChange={onChange} id='username' type='text' placeholder="Username" />
			</div> */}
			<div className={styles.inputField}>
				<label className={styles.label} htmlFor='email'></label>
				<input className={styles.input} name='email' value={formValues.email} onChange={onChange} id='email' type='text' placeholder="Email" />
			</div>
			<div className={styles.inputField}>
				<label className={styles.label} htmlFor='password'></label>
				<input className={styles.input} name='password' value={formValues.password} onChange={onChange} id='username' type='password' placeholder="Password" />
			</div>
			<div className={styles.actions}>
				<h3 className={styles.loginButton} onClick={handleFormSubmit}>Login</h3>
				<button className={styles.cancelButton} onClick={handleCancelLogin} type='button'>Cancel</button>
			</div>
		</form>

	);
}

export default LoginForm;