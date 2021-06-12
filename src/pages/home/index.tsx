import type { FunctionComponent } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Home: FunctionComponent = () => {
  const auth = useAuth();
  return (
    <>
      <h1>Home</h1>
      <p>Congratulations, you must be signed in to view this page</p>
      <table>
        <thead>
          <tr>
            <th>Current Username</th>
            <th>Current Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{auth.user}</td>
            <td>{auth.password}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Home;
