import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Links.module.css'

const Links = (props) => {

    return (
        <div className={styles.linksContainer}>
            <ul className={styles.linksList}>
                <li>
                    <Link className={`link ${styles.login}`} to='/login'>Login</Link>
                </li>
                <li className={`link ${styles.signup}`}>
                    <Link className='link' to='/signup'>Signup</Link>
                </li>
            </ul>
        </div>

    );
}

export default Links;