const mushroomMaker = (mushroom) => {
  const domString = `
  <div class="col-3">
    <div class="card" id=${mushroom.id}>
      <div class="card-body">
        <div class="card-header">${mushroom.name}</div>
        <h5 class="card-title">${mushroom.location}</h5>
        <p class="card-text">This mushroom is of size <b>${mushroom.size}</b> and weighs <b>${mushroom.weight}</b> grams</p>
        <button class="btn btn-danger delete-shroom"><i class="far fa-trash-alt"></i> Delete Shroom</button>
        </div>
      </div>
    </div>
  `;

  return domString;
};

export default { mushroomMaker };
