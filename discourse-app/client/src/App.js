import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import store from './store/index.js';
import Header from './components/common/Header/Header.jsx';
import Home from './components/views/Home/Home.jsx';
import Login from './components/views/Login/Login.jsx';
import Logout from './components/views/Logout/Logout.jsx';
import Signup from './components/views/Signup/Signup.jsx';
import styles from './App.module.css';
import CreatePostPage from './components/views/CreatePost/CreatePostPage.jsx';

function App() {
  const { user: isLoggedIn } = store.getState();

  return (
    <BrowserRouter>
      <div className={styles.mainContainer}>
        <Header />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/logout'>
          <Logout />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/posts/create'>
          {isLoggedIn ? (
            <CreatePostPage />
          ) : (
            <Redirect to='/' />
          )}
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
