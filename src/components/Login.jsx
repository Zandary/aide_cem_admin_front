import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  const handleLogin = (uniqueId, password) => {
    // Here, you can implement your authentication logic.
    // You may call an API to validate the user credentials.
    console.log("Unique ID:", uniqueId);
    console.log("Mot de passe:", password);
    // For simplicity, we're just logging the input values.
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onLogin={handleLogin} />
      {/* Link to the registration page */}
      <p>
        Vous n'avez pas de compte?{" "}
        <Link to="/register">Enregistrez-vous ici</Link>
      </p>
    </div>
  );
};

export default Login;
