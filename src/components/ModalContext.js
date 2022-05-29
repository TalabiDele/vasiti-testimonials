import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        modal,
        setModal,
        done,
        setDone,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
