import React, { useState } from "react";
import { auth, app } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/dashboard");
        console.log(userCredential.user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container border rounded w-25 align-items-center">
      <p>Connexion</p>
      <form onSubmit={signIn} className="">
        <div className="form-outline mb-4">
          <input
            id="form2Example1-3"
            className="form-control"
            type="email"
            name=""
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1-3">
            Adresse Mail
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            id="form2Example1-4"
            className="form-control"
            type="password"
            name=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1-4">
            Mot de passe
          </label>
        </div>

        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            {/* Simple link */}
            <a href="#!">Mot de passe oublié?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
