import React from "react";
import Login from "./components/login";
import Active from "./components/active";
import Home from "./components/dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/common/router/protected";
import GuestRoute from "./components/common/router/guest";
import Register from "./components/register";

const guestRoutes = [
  { path: "/login", component: Login, exact: true },
  { path: "/user/active/:token", component: Active, exact: true },
  { path: "/register", component: Register, exact: true },
];

const protectedRoutes = [{ path: "/", component: Home, exact: true }];

function App() {
  return (
    <div
      className="App"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <BrowserRouter>
        <Switch>
          {guestRoutes.map((route, key) => {
            return (
              <GuestRoute
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={key}
              />
            );
          })}
          {protectedRoutes.map((route, key) => {
            return (
              <ProtectedRoute
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={key}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
