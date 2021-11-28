import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormActions from '../../lib/Form/FormActions';
import styles from './SignupForm.module.css';

const SignupForm = (props) => {

	const { onSubmit } = props;
	const [formValues, setFormValues] = useState({
		username: '',
		email: '',
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
				<label className={styles.label} htmlFor='username'></label>
				<input className={styles.input} name='username' value={formValues.username} onChange={onChange} id='username' type='text' placeholder="Username" />
			</div>
			<div className={styles.inputField}>
				<label className={styles.label} htmlFor='email'></label>
				<input className={styles.input} name='email' value={formValues.email} onChange={onChange} id='email' type='text' placeholder="Email" />
			</div>
			<div className={styles.inputField}>
				<label className={styles.label} htmlFor='password'></label>
				<input className={styles.input} name='password' value={formValues.password} onChange={onChange} id='username' type='password' placeholder="Password" />
			</div>
			<div className={styles.inputField}>
				<label className={styles.label} htmlFor='confirmPassword'></label>
				<input className={styles.input} name='confirmPassword' value={formValues.confirmPassword} onChange={onChange} id='username' type='password'  placeholder="Confirm Password" />
			</div>
			{/* <div className={styles.actions}>
				<h3 className={styles.confirmButton} onClick={handleFormSubmit}>Confirm</h3>
				<button className={styles.cancelButton} onClick={handleCancelSignup} type='button'>Cancel</button>
			</div> */}
			<FormActions
				confirmText='Confirm'
				onCancel={handleCancelSignup}
				onConfirm={handleFormSubmit}
			/>
		</form>

	);
}

export default SignupForm;