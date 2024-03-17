import Notes from "./Notes";

export const Home = () => {
    
  return (
    <div>
        <div className="container my-3">
      <h2>Add Your Notes</h2>
      <form>
  <fieldset disabled>
    {/* <legend>Disabled fieldset example</legend> */}
    <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Notes</label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
    </div>
    <div className="mb-3">
      <label for="disabledSelect" className="form-label">Disabled select menu</label>
      <select id="disabledSelect" className="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
        <label className="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>
</div>
<Notes/>
    </div>
  );
};
export default Home;
