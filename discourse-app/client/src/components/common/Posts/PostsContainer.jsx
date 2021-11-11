import React from 'react';

import styles from './PostsContainer.module.css';

const PostsContainer = (props) => {


    return (
        <div className={styles.postsContainer}>
            <h1 className={styles.postsLogo}>
                Posts
            </h1>
        </div>

    );
}


export default PostsContainer;