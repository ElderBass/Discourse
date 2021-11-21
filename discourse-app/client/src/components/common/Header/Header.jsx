import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import Links from './Links';

const Header = (props) => {

    return (
        <div className={styles.header}>
            <h1 className={styles.logo}>
                <Link className='link' to='/'>
                    Discourse
                </Link>
            </h1>
            <Links />
        </div>
    );
}

export default Header;