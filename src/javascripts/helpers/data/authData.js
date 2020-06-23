import firebase from 'firebase/app';
import 'firebase/auth';

import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistList from '../../components/mycologistList/mycologistList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const hutsDiv = $('#huts');
const logoutButton = $('#navbar-logout-button');
const singleMycoDiv = $('#single-myco');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      hutsDiv.removeClass('hide');
      singleMycoDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      mushroomList.buildForest();
      mycologistList.buildHuts();
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      hutsDiv.addClass('hide');
      singleMycoDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
