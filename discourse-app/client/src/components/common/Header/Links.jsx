import React from 'react';
import Username from './Username';
import LogoutLink from './LogoutLink';
import LoginSignupLinks from './LoginSignupLinks';
import styles from './Links.module.css';
import { connect } from 'react-redux';

const Links = (props) => {

	return (
		<div className={styles.linksContainer}>
			{props.isLoggedIn && <Username username={props.username} />}
			<ul className={styles.linksList}>
				{!props.isLoggedIn ? <LoginSignupLinks /> : <LogoutLink />}
			</ul>
		</div>

	);
}

function mapStateToProps(state) {
	return {
		username: state.user.username,
		isLoggedIn: state.user.isLoggedIn,
	};
}

export default connect(mapStateToProps)(Links);