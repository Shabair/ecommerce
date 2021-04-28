import { AUTHENTICATE, CREATE, UPDATE, DELETE, LIKE, SIGNIN, LOADING, LOGOUT } from '../constants/actionTypes';

const initialState = { loading: false, user: [] };

export default (auth = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {...auth, user:{...action.payload}};
    case LIKE:
      return auth.map((user) => (user._id === action.payload._id ? action.payload : user));
    case CREATE:
      return {...auth, user:{...action.payload}};
    case UPDATE:
      return auth.map((user) => (user._id === action.payload._id ? action.payload : user));
    case DELETE:
      return auth.filter((user) => user._id !== action.payload);
    case SIGNIN:
      return {...auth, user:{...action.payload}};
    case LOGOUT :
      return {...initialState};
    case LOADING:
      return {...auth, loading:action.payload};
    default:
      return auth;
  }
};

