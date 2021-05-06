import { AUTHENTICATE, CREATE, CREATE_FAILED, UPDATE, DELETE, LIKE, SIGNIN, LOADING, LOGOUT } from '../constants/actionTypes';

import {AUTH} from '../constants/publicConstants';

const initialState = {
  createUser: { loading: false, user: {}, errors:[] },
  loggedInUser: { loading: true, user: {}, errors:[] }
};

export default (auth = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {...auth,loading:false, user:{...action.payload}};
    case LIKE:
      return auth.map((user) => (user._id === action.payload._id ? action.payload : user));
    case CREATE:
      return {...auth, user:{...action.payload}};
    case CREATE_FAILED:
      return {...auth, errors:[...action.payload]};
    case UPDATE:
      return auth.map((user) => (user._id === action.payload._id ? action.payload : user));
    case DELETE:
      return auth.filter((user) => user._id !== action.payload);
    case SIGNIN:
      return {...auth, user:{...action.payload}};
    case LOGOUT :
      return {...initialState};

    //Register / Create User Loading
    case AUTH.REGISTER_USER_LOADING:
      return {...auth, createUser:{...auth.createUser, loading:action.payload}}
    case AUTH.REGISTER_USER_SUCCESS:
      return {...auth, createUser:{...auth.createUser, errors:[], user:{...action.payload}}}
    case AUTH.REGISTER_USER_FAILED:
      return {...auth, createUser:{...auth.createUser, errors:[...action.payload]}}

    //Logged IN User
    case AUTH.LOGGEDIN_USER_LOADING:
      return {...auth, loggedInUser:{...auth.loggedInUser, loading:action.payload}}
    default:
      return auth;
  }
};

