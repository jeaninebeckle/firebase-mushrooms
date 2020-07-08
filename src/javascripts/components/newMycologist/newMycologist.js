import utils from '../../helpers/utils';

const showMycoForm = () => {
  const domString = `

  <form>
  <div class="form-group">
    <label for="myco-name">Name:</label>
    <input type="text" class="form-control" id="myco-name" placeholder="Joe Shmo">
  </div>
  <div class="form-group">
    <label for="myco-age">Age:</label>
    <input type="number" class="form-control" id="myco-age" placeholder="10">
  </div>
  <button type="submit" class="btn btn-primary" id="myco-creator">Submit</button>
  </form>
  `;

  utils.printToDom('#new-shroom', domString);
};

export default { showMycoForm };
