import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import App from './components/App';
// import Campuses from './components/Campuses';

import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import StudentsContainer from './containers/StudentsContainer';
import NewCampusContainer from './containers/NewCampusContainer';
import EditCampusContainer from './containers/EditCampusContainer';
import DeleteCampusContainer from './containers/DeleteCampusContainer';
import StudentContainer from './containers/StudentContainer';


import { receiveCampuses, getCampusById, loadAllCampuses } from './action-creators/campuses';
import { receiveStudents, getStudentsById, getStudentById} from './action-creators/students';


const onAppEnter = () => {
  console.log('hit onAppEnter')
  const gettingCampuses = axios.get('/api/campuses');
  const gettingStudents = axios.get('/api/students');

  return Promise
    .all([gettingCampuses, gettingStudents])
    .then(responses => responses.map(res => res.data))
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveStudents(students));
    })
    .catch(err => console.log(err));
};

const onCampusEnter = function (nextRouterState) {
  const campusId = nextRouterState.params.campusId;
  store.dispatch(getCampusById(campusId));
  store.dispatch(getStudentsById(campusId));
};

const onStudentEnter = function (nextRouterState) {
  const studentId = nextRouterState.params.studentId;
  store.dispatch(getStudentById(studentId));
};
const onStudentsEnter = function (nextRouterState) {
  store.dispatch(loadAllCampuses());
};

export default function Root () {
  console.log('hit routes.js')
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/campuses" component={CampusesContainer} />
          <Route path="/campuses/:campusId" component={CampusContainer} onEnter={onCampusEnter} >
            <Route path="/edit-campus" component={EditCampusContainer} />
          </Route>
          <Route path="/students" component={StudentsContainer} onEnter={onStudentsEnter} />
          <Route path="/new-campus" component={NewCampusContainer} />
          <Route path="/students/:studentId" component={StudentContainer} onEnter={onStudentEnter} />
        </Route>
      </Router>
    </Provider>
  );
}
