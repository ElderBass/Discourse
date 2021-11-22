import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './Username.module.css'


const Username = (props) => {
  const { username } = props;
  console.log('username ? ', username);
  // const [name, setName] = useState('');

  // useEffect(() => {
  //   console.log('username inside Username.jsx', username);
  //   setName(username);
  // }, [username]);

  return (
    <h6 className={styles.username}>
      Welcome, {username}
    </h6>

  );
}

const mapStateToProps = state => {
	return {
		username: state.user.username,
	};
}

export default connect(mapStateToProps)(Username);