import React from 'react';
import { connect } from 'react-redux';
import Month from './Month';
import months from './data.js';
import styles from './Navbar.module.css';
import ArchiveLogo from './ArchiveLogo';
import CreatePostContainer from './CreatePostContainer';

const Navbar = (props) => {

    return (
        <div className={styles.navbar}>
            {props.isLoggedIn && <CreatePostContainer />}
            <ArchiveLogo />
            {months.map(month => (
                <Month key={month.name} month={month.name} isEven={month.isEven} />
            ))}
        </div>
    );
}
function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
}

export default connect(mapStateToProps)(Navbar);