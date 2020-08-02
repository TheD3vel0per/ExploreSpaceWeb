import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window['nasa-key'] = 'uDlJcGyHbQU7sBUj4wNMIE4gxxOi9cvyYWLtS6QD';

const firebaseConfig = {
  apiKey: "AIzaSyCCzrp-yWbhsYdIh-UbaUGj-WeEyC8GHj4",
  authDomain: "explorespace-5d3a9.firebaseapp.com",
  databaseURL: "https://explorespace-5d3a9.firebaseio.com",
  projectId: "explorespace-5d3a9",
  storageBucket: "explorespace-5d3a9.appspot.com",
  messagingSenderId: "879142598529",
  appId: "1:879142598529:web:faf57566074a56aefa1a80"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
