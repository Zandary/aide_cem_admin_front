import React, { useState, useEffect } from "react";
import { auth, app } from "../firebase";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";

const SignIn = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(true);

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
    <form
      onSubmit={signIn}
      className="flex align-items-center justify-content-center"
    >
      <div className="surface-card p-4 shadow-2 border-round w-15">
        <div className="text-center mb-5">
          <img src="logo512.png" alt="hyper" height={50} className="mb-3" />
          <div className="text-900 text-3xl font-medium mb-3">
            Bienvenue sur Aide CEM Admin
          </div>
          <span className="text-600 font-medium line-height-3">
            Vous n'avez pas de compte?
          </span>
          <a
            className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
            href="#"
          >
            Créer un compte
          </a>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="E-mail"
            className="w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Mot de passe"
            className="w-full mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <Checkbox
                id="rememberme"
                onChange={(e) => setChecked(e.checked)}
                checked={checked}
                className="mr-2"
              />
              <label htmlFor="rememberme">Se souvenir de moi</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Forgot your password?
            </a>
          </div>

          <Button
            type="submit"
            label="Sign In"
            icon="pi pi-user"
            className="w-full"
          />
        </div>
      </div>
    </form>
  );
};

export default SignIn;
