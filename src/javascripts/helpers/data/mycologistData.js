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

export default { getMycologists };
