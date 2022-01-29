import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import store from '../../../store';
import API from '../../../utils/API';
import moment from 'moment';
import * as PostActions from '../../../store/actions/posts.js';
import CreatePostForm from './CreatePostForm';
import styles from './CreatePostPage.module.css';

const CreatePostPage = (props) => {
  const history = useHistory();
  const createPostEl = useRef(null);

  useEffect(() => {
    createPostEl.current.scrollIntoView();
  }, []);

  const onSubmit = async formValues => {
    const { user } = store.getState();
    const { title } = formValues;
    const { username, id: userId } = user;

    const now = moment().format('MMMM Do YYYY, h:mm:ss a');
    const postData = {
      ...formValues,
      userId,
      author: username,
      timestamp: now,
      id: `Author:${username}?Date:${now}?Title:${title}`,
    };

    try {
      const response = await API.createPost(postData);
      if (response.statusText === 'OK' && response.data.isSuccess) {
        const { postData } = response.data;
        store.dispatch(PostActions.addPost(postData));
        console.log('\n store after update = ', store.getState());
        history.push('/');
        return { isSuccess: true};
      }
    } catch (err) {
      console.log('\n \n error in creating post', err, '\n \n');
      return { isSuccess: false, error: err};
    }
  };

  return (
    <div ref={createPostEl} className={styles.createPostPage}>
      <h1 className={styles.createPostHeader}>
        Start a Conversation
      </h1>
      <CreatePostForm onSubmit={onSubmit} />
    </div>
  );
}

export default CreatePostPage;