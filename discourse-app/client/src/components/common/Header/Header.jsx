import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../../../store';
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
            <Links userInfo={props.userInfo} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        userInfo: state.user,
    };
}

export default connect(mapStateToProps)(Header);