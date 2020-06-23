import mycologistComponent from '../mycologist/mycologist';
import mycologistData from '../../helpers/data/mycologistData';
import singleMycologist from '../singleMycologist/singleMycologist';
import utils from '../../helpers/utils';

const buildHuts = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      console.error('Get mycologists worked!', mycologists);
      let domString = `
      <h2 class="text-center">Huts</h2>
      <div class="d-flex flex-wrap">
      `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });

      domString += '</div>';

      utils.printToDom('#huts', domString);

      $('body').on('click', '.myco-card', singleMycologist.buildMycologist);
    })
    .catch((err) => console.error('nice try, neener', err));
};
export default { buildHuts };
