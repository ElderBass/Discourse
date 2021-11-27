import * as PostActions from '../actions/posts';
import API from '../../utils/API';

// async function fetchPosts() {
//   try {
//     const response = await API.getAllPosts();
//     console.log('\n \n  response in useEffect get all posts = ', response, '\n \n ')
//     if (response.statusText === 'OK' && response.data.isSuccess) {
//       return response.data.posts;
//     }
//   } catch (err) {
//     console.log('\n \n error in retrieving all posts useEffect', err, '\n \n');
//     throw err;
//   }
// }

const INITIAL_STATE = {
  posts: [],
};

function posts (state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case PostActions.ADD_POST:
      return {
        posts: [...state.posts, payload],
      }
    case PostActions.SET_ALL_POSTS:
      return {
        posts: payload,
      }
    default:
      return state;
  }
}

export default posts;
