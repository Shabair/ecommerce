import './App.css';
import { Switch, BrowserRouter as Router } from "react-router-dom";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";


function App() {
  return (
    <>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              component={route.component}
              pageTitle={route.pageTitle}
              key={idx}
              exact={route.exact}
              isAuthProtected={false}
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              component={route.component}
              pageTitle={route.pageTitle}
              key={idx}
              exact={route.exact}
              isAuthProtected={true}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
