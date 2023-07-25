import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  SET_ERROR,
  SET_LOADING,
  SET_LOGOUT,
} from '../Constants/actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.payload
          ? action.payload
          : 'Something went wrong, try again',
        isLoading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case SET_LOGOUT: {
      localStorage.removeItem('yellowUser');
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
