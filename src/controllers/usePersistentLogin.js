import { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { openDB } from "idb";

const usePersistentLogin = () => {
  const [user, setUser] = useState(null);

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

  const checkStoredCredentials = () => {
    return openDB("my-database", 1).then((db) => {
      return db.get("credentials", "login");
    });
  };

  const signInWithStoredCredentials = (credentials) => {
    const { email, password } = credentials;
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return setPersistence(auth, browserLocalPersistence).then(() => {
          setUser(userCredential.user);
          return userCredential.user;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { user, checkStoredCredentials, signInWithStoredCredentials };
};

export default usePersistentLogin;