import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import type { FunctionComponent } from "react";
import { PrivateRoute } from "./components";
import { ProvideAuth } from "./contexts/AuthContext";
import { Home, Login, NoContent, Password } from "./pages";

import styles from "./app.module.css";

const App: FunctionComponent = () => (
  <ProvideAuth>
    <Router>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/password">Change Password Page</Link>
        </li>
      </ul>

      <main className={styles.main}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/password">
            <Password />
          </PrivateRoute>
          <Route component={NoContent} />
        </Switch>
      </main>
    </Router>
  </ProvideAuth>
);

export default App;
