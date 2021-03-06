import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import store from '../../../store';
import API from '../../../utils/API';
import * as UserActions from '../../../store/actions/user.js';
import ErrorContainer from '../../common/Errors/ErrorContainer';
import styles from './Signup.module.css';
import SignupForm from './SignupForm';

const Signup = (props) => {
	const [error, setError] = useState('');
	const history = useHistory();
	const signupFormEl = useRef(null);

	useEffect(() => {
		signupFormEl.current.scrollIntoView();
	}, []);


	const onSubmit = formValues => {
		const { password, confirmPassword } = formValues;
		if (password !== confirmPassword) {
			setError('Password do not match.');
			return;
		}
		console.log('\n \n form values = ', formValues, '\n \n');
		API.addUser(formValues)
			.then(result => {
				console.log('\n result in addUser onSubmit = ', result, '\n');
				store.dispatch(UserActions.addUser(result.data));
				setError([]);
				history.push('/login');
			})
			.catch(err => {
				setError(err);
			});
	};

	return (
		<div ref={signupFormEl} className={styles.signupPage}>
			<h1 className={styles.signupHeader}>
				Join the Conversation
			</h1>
			{error.length > 0 && <ErrorContainer errors={error} />}
			<SignupForm onSubmit={onSubmit} />
		</div>
	);
}


export default Signup;