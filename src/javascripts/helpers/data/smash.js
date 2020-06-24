import mycologistData from './mycologistData';
import mycologistMushroomData from './mycologistMushroomData';
import mushroomData from './mushroomData';

const getSingleMycoWithShrooms = (mycologistId) => new Promise((resolve, reject) => {
  mycologistData.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;
      mycologist.id = mycologistId;
      mycologist.mushrooms = [];

      mycologistMushroomData.getMycoShroomsByMycoUid(mycologist.uid).then((mycoShrooms) => {
        mushroomData.getMushrooms().then((allMushrooms) => {
          mycoShrooms.forEach((mycoShroom) => {
            const mushroom = allMushrooms.find((m) => m.id === mycoShroom.mushroomId);
            mycologist.mushrooms.push(mushroom);
          });
          resolve(mycologist);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleMycoWithShrooms };
