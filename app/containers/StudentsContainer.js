
import Students from '../components/Students';
import { connect } from 'react-redux';
import { getStudentsById } from '../action-creators/students'
const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const StudentsContainer = connect(mapStateToProps)(Students);

export default StudentsContainer;
