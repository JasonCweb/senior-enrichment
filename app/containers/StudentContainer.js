import Student from '../components/Student';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.students.selected
  };
};

const StudentContainer = connect(mapStateToProps)(Student);

export default StudentContainer;
