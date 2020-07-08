const mushroomMaker = (mushroom) => {
  let domString = `
  <div class="col-3">
    <div class="card" id=${mushroom.id}>
      <div class="card-body">
        <div class="card-header">${mushroom.name}</div>
        <h5 class="card-title">${mushroom.location}</h5>
        <p class="card-text">This mushroom is of size <b>${mushroom.size}</b> and weighs <b>${mushroom.weight}</b> grams</p>
        <p>Owners: </p>
        <form>
        `;
  mushroom.mycologists.forEach((mycologist) => {
    domString += `     
    <div class="form-check">
    <input type="checkbox" class="form-check-input myco-shroom-checkbox" id="${mycologist.mycologistMushroomId}" data-mycologist-uid=${mycologist.uid} ${mycologist.isChecked ? 'checked' : ''}>
    <label class="form-check-label" for="${mycologist.mycologistMushroomId}">${mycologist.name}</label>
  </div>`;
  });

  domString += `
        <form>
        <button class="mushroom-button btn btn-danger delete-shroom"><i class="far fa-trash-alt"></i> Delete Shroom</button>
        <button class="mushroom-button btn btn-info edit-shroom"><i class="fas fa-pen-nib"></i> Edit Shroom</button>
        </div>
      </div>
    </div>
  `;

  return domString;
};

export default { mushroomMaker };
