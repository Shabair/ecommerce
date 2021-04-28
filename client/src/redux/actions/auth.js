import { AUTHENTICATE, CREATE, UPDATE, DELETE, LIKE, SIGNIN, LOADING, LOGOUT } from '../constants/actionTypes';

import * as api from '../api/auth.js';

export const authenticate = () => async (dispatch) => {
  try {
    const {data} = await api.authenticate();
    console.log(data.data)
    dispatch({ type: AUTHENTICATE, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {

    dispatch(loadingUser(true));

    const { data } = await api.createUser(user);

    dispatch(loadingUser(false));
    
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const loadingUser = (val) => {
  try {
    return { type: LOADING , payload:val};
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (user) => async (dispatch) => {
  try {

    dispatch(loadingUser(true));
    
    const  result   = await api.signinUser(user);
    
    dispatch(loadingUser(false));

    dispatch({ type: SIGNIN, payload: result.data.data });

  } catch (error) {

    console.log(error.message);

  }
};

export const logout = () => async (dispatch) => {
  try {
    
    const  data   = await api.logout();

    dispatch({ type: LOGOUT});
  } catch (error) {
    console.log(error.message);
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
