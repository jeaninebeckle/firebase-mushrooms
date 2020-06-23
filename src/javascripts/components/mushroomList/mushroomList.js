import mushroomComponent from '../mushroom/mushroom';
import mushroomData from '../../helpers/data/mushroomData';
import utils from '../../helpers/utils';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      console.error('Get mushrooms worked!', mushrooms);
      let domString = `
      <h2 class="text-center">Forest</h2>
      <div class="d-flex flex-wrap">
      `;

      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });

      domString += '</div>';

      utils.printToDom('#forest', domString);
    })
    .catch((err) => console.error('it broke', err));
};
export default { buildForest };
