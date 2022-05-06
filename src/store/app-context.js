import { createContext, useState } from "react";

const AppContext = createContext({
  patient: false,
  pharmacist: false,
  employee: false,
  choosePatientHandler: () => {},
  choosePharmacistHandler: () => {},
  chooseEmployeeHandler: () => {},
  step2Employee: false,
  step2Pharmacist: false,
  step2EmployeeShowHandler: () => {},
  step2EmployeeHideHandler: () => {},
  step2PharmacistShowHandler: () => {},
  step2PharmacistHideHandler: () => {},
});

export const AppContextProvider = (props) => {
  const [patient, setPatient] = useState(true);
  const [pharmacist, setPharmacist] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [step2Employee, setStep2Employee] = useState(false);
  const [step2Pharmacist, setStep2Pharmacist] = useState(false);

  const step2EmployeeShowHandler = () => setStep2Employee(true);
  const step2EmployeeHideHandler = () => setStep2Employee(false);
  const step2PharmacistShowHandler = () => setStep2Pharmacist(true);
  const step2PharmacistHideHandler = () => setStep2Pharmacist(false);

  const choosePatientHandler = () => {
    setPatient(true);
    setPharmacist(false);
    setEmployee(false);
  };

  const choosePharmacistHandler = () => {
    setPatient(false);
    setPharmacist(true);
    setEmployee(false);
  };

  const chooseEmployeeHandler = () => {
    setPatient(false);
    setPharmacist(false);
    setEmployee(true);
  };

  const value = {
    patient,
    choosePatientHandler,
    pharmacist,
    choosePharmacistHandler,
    employee,
    chooseEmployeeHandler,
    step2Employee,
    step2EmployeeShowHandler,
    step2EmployeeHideHandler,
    step2PharmacistShowHandler,
    step2PharmacistHideHandler,
    step2Pharmacist,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContext;
