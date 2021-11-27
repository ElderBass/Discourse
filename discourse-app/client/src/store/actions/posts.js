const ADD_POST = 'ADD_POST';
const addPost = (post) => ({
    type: ADD_POST,
    payload: post
});

const SET_ALL_POSTS = 'SET_ALL_POSTS';
const setAllPosts = (posts) => ({
    type: SET_ALL_POSTS,
    payload: posts
});

export {
  ADD_POST,
  addPost,
  SET_ALL_POSTS,
  setAllPosts,
};
