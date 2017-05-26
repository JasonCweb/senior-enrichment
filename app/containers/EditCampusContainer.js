import React, { Component } from 'react';
import EditCampus from '../components/EditCampus';
import { editCampus } from '../action-creators/campuses';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    editCampus (campusName, campusNickname) {
      dispatch(editCampus(campusName, campusNickname));
    }
  };
};

class EditCampusContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nameQuery: '',
      nicknameQuery: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (type, value) {
    this.setState({ [`${type}Query`]: value });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log('CAMPUS ID: ', this.props.campusId)
    if (this.state.nameQuery && this.state.nicknameQuery)
      this.props.editCampus(this.state, this.props.campusId)
  }

  render () {
    return (
      <EditCampus
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(EditCampusContainer);
