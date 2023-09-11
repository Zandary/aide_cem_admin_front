import React from "react";

const FormValidations = ({ email, password, password2 }) => {
  const isEmailValid = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
  };

  const arePasswordsMatching = (password, password2) => {
    return password === password2;
  };

  const isFormValid = () => {
    return isEmailValid(email) && arePasswordsMatching(password, password2);
  };

  return {
    isEmailValid,
    arePasswordsMatching,
    isFormValid,
  };
};

export default FormValidations;