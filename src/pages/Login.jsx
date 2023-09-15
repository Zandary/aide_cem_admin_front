import React, { useState, useEffect } from "react";
import { auth, app } from "../firebase";
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  console.log(email, password);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setUser(user);
      } else {
        // User is logged out
        setUser(null);
      }
    });
  
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Enable local persistence
        setPersistence(auth, browserLocalPersistence)
          .then(() => {
            // Signed in
            setUser(userCredential.user); // Update the user state
            navigate("/dashboard");
            console.log(userCredential.user);
            // ...
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container border rounded w-50 align-items-center">
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
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
