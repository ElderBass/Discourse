import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/common/Header/Header.jsx';
import Home from './components/views/Home';
import Login from './components/views/Login/Login.jsx';
import Logout from './components/views/Logout/Logout.jsx';
import Signup from './components/views/Signup/Signup.jsx';
import styles from './App.module.css';

function App() {
  return (
    <Router>
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
      </div>
    </Router>
  );
}

export default App;
