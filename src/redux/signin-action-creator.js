import {Action} from 'react-native-router-flux';
import {startLoading, stopLoading} from 'redux/common-action-creator';
import API from 'network/Api';


export const SUCCESS = 'Success';
export const FAILED = 'Failed';

const userInfo = {
  id: 1,
  name: 'binhnguyen',
  email: 'binh@gmail.com',
  token: 'abasfsdiffsif'
}

export function loginRequestSuccess(data) {
  return {
    type: SUCCESS,
    payload: data
  }
}

export function loginRequestFailed(data) {
  return {
    type: FAILED,
    payload: data
  }
}

export default function loginAsync(credentials) {
  return dispatch => {
    dispatch(startLoading());
    API.signIn(credentials).then(userInfo => {
      dispatch(loginRequestSuccess(userInfo));
      dispatch(stopLoading());
    }).catch(err => {
      dispatch(loginRequestFailed(error));
      dispatch(stopLoading());
    })
  }
}
