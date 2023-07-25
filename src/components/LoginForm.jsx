// LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [uniqueId, setUniqueId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Make a POST request to the backend server for login
    axios
      .post("http://localhost:5000/login", {
        uniqueId: uniqueId,
        password: password,
      })
      .then((response) => {
        console.log(response.data.message);
        // If login is successful, redirect to the welcome page
        if (response.data.message === "Login successful") {
          navigate("/welcome");
        }
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Unique ID"
        value={uniqueId}
        onChange={(e) => setUniqueId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
