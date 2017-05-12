import {combineReducers} from 'redux';
import LogInReducer from 'redux/signin-reducer';
// import { reducer as formReducer } from 'redux-form';
//
// const reducers = {
//
//   form: formReducer     
// }
//
// const rootReducer = combineReducers(reducers);


const rootReducer = combineReducers({
  LogInReducer
});


export default rootReducer;
