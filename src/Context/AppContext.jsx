import { createContext, useContext, useReducer } from 'react';
import { baseUrl, getUserFromLocalStorage } from '../utils/getUserFromStorege';
import { reducer } from './reducer';
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  SET_ERROR,
  SET_LOADING,
  SET_LOGOUT,
  SUCCESS,
} from '../Constants/actions';

const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  error: false,
  errorMsg: '',
};
const AppContent = createContext();

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (info) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await baseUrl.post('/api/users/register', info);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data.result });
      localStorage.setItem('yellowUser', JSON.stringify(response.data.result));
    } catch (error) {
      if (error.response) {
        dispatch({ type: SET_ERROR, payload: error.response.data.message });
      } else {
        dispatch({ type: SET_ERROR });
      }
    }
  };
  const loginUser = async (info) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await baseUrl.post('/api/users/login', info);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.result });
      localStorage.setItem('yellowUser', JSON.stringify(response.data.result));
    } catch (error) {
      if (error.response) {
        dispatch({ type: SET_ERROR, payload: error.response.data.message });
      } else {
        dispatch({ type: SET_ERROR });
      }
    }
  };
  const logoutUser = () => {
    dispatch({ type: SET_LOGOUT });
  };
  return (
    <AppContent.Provider
      value={{ ...state, dispatch, registerUser, loginUser, logoutUser }}
    >
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContent);
};

export default AppContext;
