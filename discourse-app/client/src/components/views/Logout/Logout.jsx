import React from 'react';
import { useHistory } from 'react-router-dom';
import store from '../../../store';
import * as UserActions from '../../../store/actions/user.js';

import styles from './Logout.module.css';
import LogoutForm from './LogoutForm';

const Logout = (props) => {
    const history = useHistory();

    const onSubmit = () => {
      store.dispatch(UserActions.logoutUser());
      history.push('/');
    };

    return (
        <div className={styles.logoutPage}>
            <LogoutForm onSubmit={onSubmit} />
        </div>
    );
}


export default Logout;