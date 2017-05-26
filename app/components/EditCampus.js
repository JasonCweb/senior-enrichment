import React from 'react';

export default function EditCampus (props) {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const nameQuery = props.nameQuery;
  const nicknameQuery = props.nicknameQuery;
  const warning = props.warning;
  const inputValue = props.inputValue;
  console.log('editCampus props: ', props)


  const nameChange = e => handleChange('name', e.target.value);
  const nicknameChange = e => handleChange('nickname', e.target.value);

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Edit Campus</legend>
          { warning && <div className="alert alert-warning">{warning}</div> }
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={nameChange}
                value={nameQuery}
              />
            </div>
            <label className="col-xs-2 control-label">Nickname</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={nicknameChange}
                value={nicknameQuery}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button
                type="submit"
                className="btn btn-success"
                disabled={false}>
                Edit Campus
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
