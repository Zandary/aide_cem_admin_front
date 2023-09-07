import React, { useState } from "react";
import { auth, app } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div>
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1-1">
            Adresse Mail
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            id="form2Example1-2"
            className="form-control"
            type="password"
            name=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1-2">
            Mot de passe
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
