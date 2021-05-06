import './App.css';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from './redux/actions/auth'
import Loading from './components/Common/Loading/Loading'
import Routes from './routes/Routes'
function App() {

  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.auth.loggedInUser)

  useEffect(() => {

    dispatch(authenticate());

  }, [dispatch]);

  return (
    <>
      {
        (loggedInUser.loading) ? '' : <Routes />
      }
      <Loading />
    </>
  );
}

export default App;
