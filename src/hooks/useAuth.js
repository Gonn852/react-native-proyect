import { useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState(undefined);

  const login = (payload) => {
    setAuth(payload)
  };

  const logout = () => {
    setAuth(
     undefined
    );
  };

  return {
    auth,
    login,
    logout,
  };
};

export default useAuth;
