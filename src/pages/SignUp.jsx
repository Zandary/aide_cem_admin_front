import React, { useState } from "react";
import { auth, app } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
    <div className="container border rounded w-50 align-items-center">
      <p>Inscription</p>
      <form onSubmit={signUp}>
        <div className="form-outline mb-4">
          <input
            id="form2Example1-1"
            className="form-control"
            type="email"
            name=""
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <label className="form-label" for="form2Example1-1">
            Adresse Mail
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            id="form2Example1-2"
            className="form-control"
            type="password"
            name=""
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1-2">
            Mot de passe
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            id="form2Example1-4"
            className="form-control"
            type="password"
            name=""
            placeholder="Confirmez votre mot de passe"
            value={password2}
            onChange={handlePassword2Change}
          />
          <label className="form-label" htmlFor="form2Example1-4">
            Mot de passe
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            id="form2Example1-4"
            className="form-control"
            type="text"
            name=""
            placeholder="Code confidentiel"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1-4">
            Code confidentiel
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4 w-100"
        disabled={disableButton}>
          S'inscrire
        </button>

        {!isEmailValid && (
          <p className="small">Addresse mail non valide</p>
        )}
        {disableButton && (
          <p className="small">Les mots de passe ne correspondent pas</p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
