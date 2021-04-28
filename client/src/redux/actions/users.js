import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, SIGNIN, LOADING } from '../constants/actionTypes';

import * as api from '../api/users.js';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {

    dispatch(loadingUser());

    const { data } = await api.createUser(user);

    dispatch({ type: CREATE, payload: data });
    dispatch(loadingUser());
  } catch (error) {
    console.log(error.message);
  }
};

export const loadingUser = () => {
  try {
    return { type: LOADING };
  } catch (error) {
    console.log(error.message);
  }
};

export const signinUserReq = (user) => async (dispatch) => {
  try {
    const  data   = await api.signinUser(user);

    dispatch({ type: SIGNIN, payload: data });

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
