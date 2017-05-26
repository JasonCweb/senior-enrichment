import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS } from '../constants';
import { browserHistory,} from 'react-router';
import axios from 'axios';

export const receiveCampuses = campuses => {
  console.log('hit receiveCampuses. campuses: ', campuses);
  return ({
    type: RECEIVE_CAMPUSES,
    campuses
})};

export const receiveCampus = campus => {
  console.log('hit receiveCampus. campus: ', campus)
  return ({
    type: RECEIVE_CAMPUS,
    campus
})};

export const getCampusById = campusId => {
  console.log('hit getCampusById. campusId: ', campusId)
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
      .then(response => {
        dispatch(receiveCampus(response.data));
      });
  };
};

export const addNewCampus = (campusName, campusNickname) => {
  return (dispatch, getState) => {
    return axios.post('/api/campuses', {name: campusName, nickname: campusNickname})
      .then(res => res.data)
      .then(campus => {
        const newListOfCampuses = getState().campuses.list.concat([campus]);
        dispatch(receiveCampuses(newListOfCampuses));
        // browserHistory.push('/campuses');
      });
  };
};

export const editCampus = (campus, campusId) => {
  campus.id = campusId;
  return (dispatch, getState) => {
    return axios.put(`/api/campuses/${campus.id}`, campus)
      .then(res => res.data)
      .then(campus => {
        const newListOfCampuses = getState().campuses.list.concat([campus]);
        dispatch(receiveCampuses(newListOfCampuses));
        browserHistory.push(`/campuses`);
      });
  };
};

export const deleteCampusById = (campusId) => {
  return (dispatch, getState) => {
    return axios.delete(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        const newListOfCampuses = getState().campuses.list.concat([campus]);
        dispatch(receiveCampuses(newListOfCampuses));
        browserHistory.push('/')
      });
  };
};

export const loadAllCampuses = () => {
  return dispatch => {
    axios.get('/api/campuses')
      .then(response => {
        dispatch(receiveCampuses(response.data));
      });
  };
};
