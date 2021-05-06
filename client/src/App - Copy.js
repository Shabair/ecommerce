import './App.css';

import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {authenticate} from './redux/actions/auth'
import Loading from './components/Common/Loading/Loading'
import Routes from './routes/Routes'
function App() {

  const dispatch = useDispatch();
  
  const auth = useSelector((state)=>state.auth)
  
  useEffect(()=>{
    dispatch(authenticate());

    
  },[dispatch]);

  return (
    <>
      {
        (auth.loading)?<Loading />:<Routes />
      }
    </>
  );
}

export default App;
