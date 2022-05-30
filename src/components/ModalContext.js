import { createContext, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [done, setDone] = useState(false);
  const [testData, setTestData] = useLocalStorage("testimonials", []);
  const [studentData, setStudentData] = useLocalStorage("student", []);

  // useEffect(() => {
  //   storeData(testData);
  // }, []);

  const storeData = (image, name, type, message, city) => {
    setTestData([
      ...testData,
      { image: image, name: name, type: type, message: message, city: city },
    ]);
    console.log(testData);
  };
  const storeStudentData = (image, name, type, message, city) => {
    setStudentData([
      ...studentData,
      { image: image, name: name, type: type, message: message, city: city },
    ]);
    console.log(studentData);
  };

  return (
    <AuthContext.Provider
      value={{
        modal,
        setModal,
        done,
        setDone,
        testData,
        setTestData,
        storeData,
        storeStudentData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
