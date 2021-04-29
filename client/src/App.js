import './App.css';
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import Routes
import { adminProtectedRoutes, publicRoutes } from "./routes/";
import Layout from './components/HorizontalLayout/Layout'
import AdminLayout from './components/VerticalLayout/Layout'
import NotFound from './pages/NotFound';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from './redux/actions/auth'
import {authenticate} from './redux/actions/auth'
import Loading from './components/Common/Loading/Loading'

function App() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(authenticate());
  },[]);

  const auth = useSelector((state)=>state.auth)
  // console.log(auth)
  return (
    <>
      {/* <Loading /> */}

      <Router>
        <Switch>
          {publicRoutes.map((route) => {
            const Component = route.component
            return (
              <Route exact path={route.path}>
                <Layout pageTitle={route.pageTitle}>
                  <Component />
                </Layout>
              </Route>
            )
          })}

          {adminProtectedRoutes.map((route, idx) => {
            const Component = route.component
            return (
              (auth.user.role !== 1) ?
                <Route exact path={route.path}>
                  <Redirect to="/login" />
                </Route>
                : <Route exact path={route.path}>
                  <AdminLayout pageTitle={route.pageTitle}>
                    <Component />
                  </AdminLayout>
                </Route>
            )
          })} 
          <Route path="/logout" exact component={()=>{dispatch(logout()); return <Redirect to="/" />}} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
