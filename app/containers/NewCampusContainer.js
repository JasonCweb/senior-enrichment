import React, { Component } from 'react';
import NewCampus from '../components/NewCampus';
import { addNewCampus } from '../action-creators/campuses';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCampus (campusName, campusNickname) {
      dispatch(addNewCampus(campusName, campusNickname));
    }
  };
};

class NewCampusContainer extends Component {

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
    if (this.state.nameQuery && this.state.nicknameQuery)
      this.props.addNewCampus(this.state.nameQuery, this.state.nicknameQuery)
  }

  render () {
    return (
      <NewCampus
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
)(NewCampusContainer);
