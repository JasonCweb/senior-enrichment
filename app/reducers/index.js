import { combineReducers } from 'redux'
import campusesReducer from './campuses-reducer'
import studentsReducer from './students-reducer'
const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// };

// export default rootReducer;
export default combineReducers({
  campuses: campusesReducer,
  students: studentsReducer
});
