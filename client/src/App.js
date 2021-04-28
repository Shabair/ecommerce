import './App.css';
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import Layout from './components/HorizontalLayout/Layout'
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
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

          {authProtectedRoutes.map((route, idx) => {
            const Component = route.component
            const isAuthProtected = true
            return (
              (isAuthProtected) ?
                <Route exact path={route.path}>
                  <Redirect to="/login" />
                </Route>
                : <Route exact path={route.path}>
                  <Layout pageTitle={route.pageTitle}>
                    <Component />
                  </Layout>
                </Route>
            )
          })}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
