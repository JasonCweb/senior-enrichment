import React, { Component } from 'react';
import DeleteCampus from '../components/DeleteCampus';
import { deleteCampusById } from '../action-creators/campuses';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCampusById (campusId) {
      dispatch(deleteCampusById(campusId));
    }
  };
};

class DeleteCampusContainer extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.deleteCampusById(this.props.campusId);
  }

  render () {
    return (
      <DeleteCampus handleSubmit={this.handleSubmit} />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteCampusContainer);
