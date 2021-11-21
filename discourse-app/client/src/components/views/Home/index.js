import React from 'react';
import Navbar from '../../common/Navbar/Navbar';
import PostsContainer from '../../common/Posts/PostsContainer.jsx';
import styles from './Home.module.css'

const Home = (props) => {

    return (
        <div className={styles.homePageContainer}>
            <Navbar />
            <PostsContainer />
        </div>
    );
}

export default Home;