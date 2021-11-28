import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import store from '../../../store';
import API from '../../../utils/API';
import * as UserActions from '../../../store/actions/user.js';
import ErrorContainer from '../../common/Errors/ErrorContainer';
import styles from './Login.module.css';
import LoginForm from './LoginForm';

const Login = (props) => {
    const [error, setError] = useState('');
    const history = useHistory();
    const loginFormEl = useRef(null);

    useEffect(() => {
        loginFormEl.current.scrollIntoView();
    }, []);

    const onSubmit = async (e, formValues) => {
        e.preventDefault();
        try {
            const response = await API.loginUser(formValues);
            if (response.statusText === 'OK' && response.data.isSuccess) {
                const userData = { ...response.data.user, token: response.data.token };
                store.dispatch(UserActions.loginUser(userData));
                localStorage.setItem('at', response.data.token);
                localStorage.setItem('user', response.data.user);
                setError([]);
                console.log('\n store after update = ', store.getState());
                history.push('/');
            }
        } catch (err) {
            console.log('\n \n error in retrieving all posts useEffect', err, '\n \n');
            setError(['Something went wrong bro.']);
        }
    };

    return (
        <div ref={loginFormEl} className={styles.loginPage}>
            <h1 className={styles.loginHeader}>
                Welcome Back
            </h1>
            {error.length > 0 && <ErrorContainer errors={error} />}
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
}

export default Login;