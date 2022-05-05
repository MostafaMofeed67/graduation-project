import { createContext, useState } from "react";

const AppContext = createContext({
  patient: false,
  pharmacist: false,
  employee: false,
  choosePatientHandler: () => {},
  choosePharmacistHandler: () => {},
  chooseEmployeeHandler: () => {},
});

export const AppContextProvider = (props) => {
  const [patient, setPatient] = useState(true);
  const [pharmacist, setPharmacist] = useState(false);
  const [employee, setEmployee] = useState(false);

  const choosePatientHandler = () => setPatient(true);
  const choosePharmacistHandler = () => setPharmacist(true);
  const chooseEmployeeHandler = () => setEmployee(true);

  const value = {
    patient,
    choosePatientHandler,
    pharmacist,
    choosePharmacistHandler,
    employee,
    chooseEmployeeHandler,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContext;
