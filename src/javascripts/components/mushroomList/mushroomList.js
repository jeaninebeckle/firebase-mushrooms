import mushroomComponent from '../mushroom/mushroom';
import mushroomData from '../../helpers/data/mushroomData';
import editMushroom from '../editMushroom/editMushroom';
import newMushroom from '../newMushroom/newMushroom';
import mycologistMushroomData from '../../helpers/data/mycologistMushroomData';
import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;
  console.error(mushroomId);

  smash.totallyRemoveShroomie(mushroomId)
    .then(() => {
      buildForest(); //eslint-disable-line
      utils.printToDom('#single-myco', '');
    })
    .catch((err) => console.error('could not delete mushroom', err));
};

const showShroomForm = (e) => {
  editMushroom.showForm(e.target.closest('.card').id);
};

const editShroomEvent = (e) => {
  e.preventDefault();
  const mushroomId = e.target.closest('.edit-mushroom').id;

  const editedMush = {
    name: $('#edit-mush-name').val(),
    size: $('#edit-mush-size').val(),
    location: $('#edit-mush-location').val(),
    weight: $('#edit-mush-weight').val() * 1,
  };

  mushroomData.updateMushroom(mushroomId, editedMush)
    .then(() => {
      buildForest(); //eslint-disable-line
      utils.printToDom('#edit-shroom', '');
    })
    .catch((err) => console.error('could not edit mushroom', err));
};

const addShroomEvent = (e) => {
  e.preventDefault();

  const newMush = {
    name: $('#mush-name').val(),
    size: $('#mush-size').val(),
    location: $('#mush-location').val(),
    weight: $('#mush-weight').val() * 1,
  };

  mushroomData.addMushroom(newMush)
    .then(() => {
      buildForest(); // eslint-disable-line
      utils.printToDom('#new-shroom', '');
    })
    .catch((err) => console.error('could not add mushroom', err));
};

const mycoMushroomController = (e) => {
  if (e.target.checked) {
    const newMycologistMushroom = {
      mushroomId: e.target.closest('.card').id,
      mycologistUid: e.target.dataset.mycologistUid,
    };

    mycologistMushroomData.addMycologistMushroom(newMycologistMushroom)
      .then(() => {
        buildForest(); //eslint-disable-line
        utils.printToDom('#single-myco', '');
        utils.printToDom('#new-shroom', '');
      });
  } else {
    mycologistMushroomData.deleteMycoMushroom(e.target.id)
      .then(() => {

      })
      .catch((err) => console.error('delete myco mushroom failed', err));
  }
};

const buildForest = () => {
  smash.getShroomsWithOwners()
    .then((mushrooms) => {
      let domString = `
      <h2 class="text-center">Forest</h2>
      <button class="btn btn-success" id="show-add-mush">Add New Shroom</button>
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

const forestEvents = () => {
  $('body').on('click', '.delete-shroom', removeShroomEvent);
  $('body').on('click', '.edit-shroom', showShroomForm);
  $('body').on('click', '#show-add-mush', newMushroom.showForm);
  $('body').on('click', '#mush-creator', addShroomEvent);
  $('body').on('click', '#mush-editor', editShroomEvent);
  $('body').on('click', '.myco-shroom-checkbox', mycoMushroomController);
};

export default { buildForest, forestEvents };
