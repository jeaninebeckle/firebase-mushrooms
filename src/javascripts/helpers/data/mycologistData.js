import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMycologists = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologists.json`)
    .then((response) => {
      const mycologistObjects = response.data;
      const mycologists = [];
      Object.keys(mycologistObjects).forEach((mycologistId) => {
        mycologistObjects[mycologistId].id = mycologistId;
        mycologists.push(mycologistObjects[mycologistId]);
      });
      resolve(mycologists);
    })
    .catch((err) => reject(err));
});

const getMycologistById = (mycologistId) => axios.get(`${baseUrl}/mycologists/${mycologistId}.json`);

const addMyco = (newMycoObj) => axios.post(`${baseUrl}/mycologists.json`, newMycoObj);

export default { getMycologists, getMycologistById, addMyco };
