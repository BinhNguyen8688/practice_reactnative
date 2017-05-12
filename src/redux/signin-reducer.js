import { SUCCESS, FAILED } from './signin-action-creator';

const INITIAL_STATE = {
  error: '',
  user: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        error: '',
        user: action.payload
      };
    case FAILED:
        return {
          error: acction.error
        };
    default:
      return state;
  }
}
