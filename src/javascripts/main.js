import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';

import 'bootstrap';
import '../styles/main.scss';

console.error('Mushrooms!');

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
