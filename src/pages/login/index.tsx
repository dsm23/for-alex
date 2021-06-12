import { useHistory, useLocation } from "react-router-dom";
import type { FunctionComponent } from "react";
import { Button } from "../../components";
import { useAuth } from "../../contexts/AuthContext";

const Login: FunctionComponent = () => {
  const history = useHistory();
  const location = useLocation<{ from: Location }>();
  const auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleClick = () => {
    auth.signin({
      user: "johnDoe",
      password: "hunter2",
    })(() => {
      history.replace(from);
    });
  };

  return (
    <>
      <h1 className="sr-only">Login</h1>
      <p>Login with the following credentials</p>
      <pre>
        {`
        username: johnDoe
        password: hunter2
        `}
      </pre>
      <Button onClick={handleClick}>Login</Button>
    </>
  );
};

export default Login;
