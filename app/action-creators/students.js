import {RECEIVE_STUDENTS, RECEIVE_STUDENT} from '../constants';
import axios from 'axios';

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
});

export const receiveStudent = (student, campuses) => ({
  type: RECEIVE_STUDENT,
  student,
  campuses
});

export const getStudentsById = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}/students`)
      .then(results => {
        dispatch(receiveStudents(results.data));
      });
  };
};

export const getStudentById = studentId => {
  console.log('hit getStudentById. studentId: ', studentId)
  return dispatch => {
    axios.get(`/api/students/${studentId}`)
      .then(response => {
        dispatch(receiveStudent(response.data));
      });
  };
};
