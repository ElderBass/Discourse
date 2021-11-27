import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import store from '../../../store';
import API from '../../../utils/API';
import moment from 'moment';
import * as PostActions from '../../../store/actions/posts.js';
import ErrorContainer from '../../common/Errors/ErrorContainer';
import CreatePostForm from './CreatePostForm';
import styles from './CreatePostPage.module.css';

const CreatePostPage = (props) => {
  const [error, setError] = useState('');
  const history = useHistory();

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
        setError([]);
        console.log('\n store after update = ', store.getState());
        history.push('/');
      }
    } catch (err) {
      console.log('\n \n error in creating post', err, '\n \n');
      setError(['Something went wrong bro.']);
    }
  };

  return (
    <div className={styles.createPostPage}>
      <h1 className={styles.createPostHeader}>
        Start a Conversation
      </h1>
      {error.length > 0 && <ErrorContainer errors={error} />}
      <CreatePostForm onSubmit={onSubmit} />
    </div>
  );
}

export default CreatePostPage;