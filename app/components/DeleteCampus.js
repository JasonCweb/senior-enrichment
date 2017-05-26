import React from 'react';

export default function DeleteCampus (props) {
  const handleSubmit = props.handleSubmit;

  return (
      <div className="form-group">
      <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="col-xs-10 col-xs-offset-2">
            <button
              type="submit"
              className="btn btn-success"
              disabled={false}>
              Delete Campus
            </button>
          </div>
        </form>
      </div>
  )
};
