import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

// function renderDiscourse() {
//   const unsubscribe = store.subscribe(() => {
//     console.log('\n State after dispatch: ', store.getState(), '\n');
//   });

//   unsubscribe();
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
