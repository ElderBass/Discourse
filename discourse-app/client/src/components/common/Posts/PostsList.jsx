import React, { useState, useEffect } from 'react';
import Post from './Post.jsx';
import API from '../../../utils/API.js';
import { connect } from 'react-redux';
import * as PostActions from '../../../store/actions/posts';
import store from '../../../store/index.js';
import styles from './PostsList.module.css'

const PostsList = (props) => {

  const [posts, setPosts] = useState(props.posts);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await API.getAllPosts();
        console.log('\n \n  response in useEffect get all posts = ', response, '\n \n ')
        if (response.statusText === 'OK' && response.data.isSuccess) {
          store.dispatch(PostActions.setAllPosts(response.data.posts));
          setPosts(response.data.posts);
        }
      } catch (err) {
        console.log('\n \n error in retrieving all posts useEffect', err, '\n \n');
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className={styles.postsListContainer}>
      {posts.map(post => {
        return (
          <Post
            key={post._id}
            author={post.author}
            body={post.body}
            comments={post.comments}
            description={post.description}
            likes={post.likes}
            postId={post.postId}
            title={post.title}
            timestamp={post.timestamp}
            userId={post.userId}
          />
        )
      })}
    </div>
  );
}

function mapStateToProps (state) {
  return {
    posts: state.posts.posts || [],
  };
};

export default connect(mapStateToProps)(PostsList);