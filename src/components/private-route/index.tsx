import { Redirect, Route } from "react-router-dom";
import type { FunctionComponent } from "react";
import type { RouteProps } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PrivateRoute: FunctionComponent<RouteProps> = ({ children, ...rest }) => {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
