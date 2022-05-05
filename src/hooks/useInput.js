import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const enteredValueIsValid = validateInput(enteredValue);
  const enteredValueIsInValid = !enteredValueIsValid && inputIsTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlueHandler = () => {
    setInputIsTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
    setInputIsTouched(false);
  };

  return {
    value: enteredValue,
    resetInput,
    valueChangeHandler,
    inputBlueHandler,
    enteredValueIsValid,
    enteredValueIsInValid,
  };
};

export default useInput;
