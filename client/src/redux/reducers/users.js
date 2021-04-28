import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, SIGNIN, LOADING } from '../constants/actionTypes';

const initialState = { loading: false, user: [] };

export default (users = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    case CREATE:
      return {...users, user:[...users.user ,action.payload]};
    case UPDATE:
      return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    case DELETE:
      return users.filter((user) => user._id !== action.payload);
    case SIGNIN:
      return {...users, user:[action.payload]};
    case LOADING:
      console.log({...users, loading:!users.loading})
      return {...users, loading:!users.loading};
    default:
      return users;
  }
};

