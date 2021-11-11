import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/common/Header/Header.jsx.js';
import Navbar from './components/common/Navbar/Navbar.jsx.js';
import Home from './components/views/Home';
import Login from './components/views/Login';
import Signup from './components/views/Signup';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.mainContainer}>
        <Header />
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      </div>
    </Router>
  );
}

export default App;
