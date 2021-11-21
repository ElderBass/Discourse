import React, { useEffect } from 'react';
import API from '../../../utils/API';

import styles from './PostsContainer.module.css';
import PostsList from './PostsList';

const PostsContainer = (props) => {



	return (
		<div className={styles.postsContainer}>
			<h1 className={styles.postsLogo}>
				Posts
			</h1>
			<PostsList />
		</div>

	);
}


export default PostsContainer;