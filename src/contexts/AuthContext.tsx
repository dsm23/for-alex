import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { FunctionComponent } from "react";

const noop = () => {};

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: Function) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: Function) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const authContext = createContext<{
  user: string;
  password: string;
  signin: Function;
  signout: Function;
  changePassword: Function;
}>({
  user: "",
  password: "",
  signin: () => {},
  signout: () => {},
  changePassword: () => {},
});

export const useAuth = () => useContext(authContext);

const useProvideAuth = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const allowedUser = useRef("johnDoe");
  const allowedPassword = useRef("hunter2");

  const signin = (values: Record<string, string>) => (cb: Function) => {
    return fakeAuth.signin(() => {
      const newUser = values?.user;
      const newPassword = values?.password;

      setUser(newUser);
      setPassword(newPassword);
      cb();
    });
  };

  const signout = (cb: Function) => {
    return fakeAuth.signout(() => {
      setUser("");
      setPassword("");
      cb();
    });
  };

  const changePassword = (newPassword: string) => (cb: Function) => {
    allowedPassword.current = newPassword;
    setPassword(newPassword);
    cb();
  };

  useEffect(() => {
    if (user !== allowedUser.current) {
      signout(noop);
    }
  }, [user]);

  useEffect(() => {
    if (password !== allowedPassword.current) {
      signout(noop);
    }
  }, [password]);

  return {
    user,
    password,
    signin,
    signout,
    changePassword,
  };
};

export const ProvideAuth: FunctionComponent<{}> = ({ children }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
