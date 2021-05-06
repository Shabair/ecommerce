import { AUTHENTICATE, CREATE, CREATE_FAILED, UPDATE, DELETE, LIKE, SIGNIN, LOADING, LOGOUT } from '../constants/actionTypes';
import { AUTH } from '../constants/publicConstants';

import * as api from '../api/auth.js';

export const authenticate = () => async (dispatch) => {
  try {

    const { data } = await api.authenticate();

    dispatch({ type: AUTHENTICATE, payload: data.data });

    dispatch(loggedInUserLoading(false));
  } catch (error) {

    dispatch(loggedInUserLoading(false));

    console.log(error.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {

    dispatch(creatingLoadingUser(true));

    const { data } = await api.createUser(user);

    dispatch({ type: AUTH.REGISTER_USER_SUCCESS, payload: data.data });
    
    dispatch(creatingLoadingUser(false));
    
  } catch (error) {

    dispatch(creatingLoadingUser(false));

    dispatch({ type: AUTH.REGISTER_USER_FAILED, payload: error.response.data.errors });

  }
};

export const creatingLoadingUser = (val) => {
  return { type: AUTH.REGISTER_USER_LOADING, payload: val };
};

export const loggedInUserLoading = (val) => {
  return { type: AUTH.LOGGEDIN_USER_LOADING, payload: val };
};

export const login = (user) => async (dispatch) => {
  try {

    // dispatch(loadingUser(true));

    const result = await api.signinUser(user);

    // dispatch(loadingUser(false));

    dispatch({ type: SIGNIN, payload: result.data.data });

  } catch (error) {

    console.log(error.message);

  }
};

export const logout = () => async (dispatch) => {
  try {

    const data = await api.logout();

    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error.response.data.error[0].msg);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
