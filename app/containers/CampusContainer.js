import Campus from '../components/Campus';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedCampus: state.campuses.selected,
    students: state.students.list
  };
};

const CampusContainer = connect(mapStateToProps)(Campus);

export default CampusContainer;
