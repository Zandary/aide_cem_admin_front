import React, { useState } from "react";
import { auth, app } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [code, setCode] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // Step 1: Add state variable

  console.log(email, password);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsEmailValid(validateEmail(value)); // Step 2: Update isEmailValid state
  };

  const handlePassword2Change = (e) => {
    const { value } = e.target;
    setPassword2(value);
    setDisableButton(value !== password); // Disable the button if passwords don't match
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <p>Inscription</p>
      <form
        onSubmit={signUp}
        className="surface-card p-4 shadow-2 border-round w-15"
      >
        <div className="form-outline mb-4">
          <label
            htmlFor="form2Example1-1"
            className="block text-900 font-medium mb-2"
          >
            Email
          </label>
          <InputText
            id="form2Example1-1"
            className="w-full mb-3"
            type="email"
            name=""
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="form-outline mb-4">
          <label
            className="block text-900 font-medium mb-2"
            htmlFor="form2Example1-2"
          >
            Mot de passe
          </label>
          <InputText
            id="form2Example1-2"
            className="w-full mb-3"
            type="password"
            name=""
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label
            className="block text-900 font-medium mb-2"
            htmlFor="form2Example1-4"
          >
            Confirmez votre mot de passe
          </label>
          <InputText
            id="form2Example1-4"
            className="w-full mb-3"
            type="password"
            name=""
            placeholder="Confirmez votre mot de passe"
            value={password2}
            onChange={handlePassword2Change}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1-4">
            <Tooltip target=".custom-target-icon" />
            Code confidentiel{" "}
            <i
              data-pr-tooltip="No notifications"
              data-pr-position="right"
              className=".custom-target-icon pi pi-info-circle"
            ></i>
          </label>
          <InputText
            id="form2Example1-4"
            className="w-full mb-3"
            type="text"
            name=""
            placeholder="Code confidentiel"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          label="S'inscrire"
          className="w-full"
          disabled={disableButton}
        ></Button>

        {!isEmailValid && <p className="small">Addresse mail non valide</p>}
        {disableButton && (
          <p className="small">Les mots de passe ne correspondent pas</p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
