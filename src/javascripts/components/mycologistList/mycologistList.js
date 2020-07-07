import mycologistComponent from '../mycologist/mycologist';
import mycologistData from '../../helpers/data/mycologistData';
import singleMycologist from '../singleMycologist/singleMycologist';
import newMycologist from '../newMycologist/newMycologist';
import utils from '../../helpers/utils';

const addMycoEvent = (e) => {
  e.preventDefault();

  const newMyco = {
    name: $('#myco-name').val(),
    age: $('#myco-age').val() * 1,
    uid: '',
  };

  mycologistData.addMyco(newMyco)
    .then(() => {
      buildHuts(); // eslint-disable-line
      utils.printToDom('#new-myco', '');
    })
    .catch((err) => console.error('could not add myco', err));
};

const buildHuts = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
      <h2 class="text-center">Huts</h2>
      <button class="btn btn-success" id="show-add-myco">Add New Mycologist</button>
      <div class="d-flex flex-wrap">
      `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });

      domString += '</div>';

      utils.printToDom('#huts', domString);

      $('body').on('click', '.myco-card', singleMycologist.buildMycologist);
      $('body').on('click', '#show-add-myco', newMycologist.showMycoForm);
      $('body').on('click', '#myco-creator', addMycoEvent);
    })
    .catch((err) => console.error('nice try, neener', err));
};
export default { buildHuts };
