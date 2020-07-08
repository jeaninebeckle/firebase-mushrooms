import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllMycoShrooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologistMushrooms.json`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getMycoShroomsByMycoUid = (mycoUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologistMushrooms.json?orderBy="mycologistUid"&equalTo="${mycoUid}"`)
    .then((response) => {
      const mycoShroomsObj = response.data;
      const mycologistMushrooms = [];
      Object.keys(mycoShroomsObj).forEach((mycoShroomId) => {
        mycoShroomsObj[mycoShroomId].id = mycoShroomId;
        mycologistMushrooms.push(mycoShroomsObj[mycoShroomId]);
      });

      resolve(mycologistMushrooms);
    })
    .catch((err) => reject(err));
});

const getMycoShroomsByShroomId = (shroomId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologistMushrooms.json?orderBy="mushroomId"&equalTo="${shroomId}"`)
    .then((response) => {
      const mycoShroomsObj = response.data;
      const mycologistMushrooms = [];
      Object.keys(mycoShroomsObj).forEach((mycoShroomId) => {
        mycoShroomsObj[mycoShroomId].id = mycoShroomId;
        mycologistMushrooms.push(mycoShroomsObj[mycoShroomId]);
      });

      resolve(mycologistMushrooms);
    })
    .catch((err) => reject(err));
});

const deleteMycoMushroom = (mycoMushroomId) => axios.delete(`${baseUrl}/mycologistMushrooms/${mycoMushroomId}.json`);

const addMycologistMushroom = (newMycoMushroomObj) => axios.post(`${baseUrl}/mycologistMushrooms.json`, newMycoMushroomObj);

export default {
  getMycoShroomsByMycoUid,
  getMycoShroomsByShroomId,
  deleteMycoMushroom,
  getAllMycoShrooms,
  addMycologistMushroom,
};
