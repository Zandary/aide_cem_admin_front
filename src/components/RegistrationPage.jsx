import React, { useState } from "react";
import axios from "axios";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    uniqueId: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/register", formData)
      .then((response) => {
        console.log("from react", response.data);
        // You can add a success message or redirect to another page here
      })
      .catch((error) => {
        console.error("from react", error);
        console.log(formData);
        // You can add an error message here
      });
  };

  return (
    <div>
      <h1>Page d'enregistrement</h1>
      <form onSubmit={handleSubmit}>
        <label>Nom:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Prénom:</label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
        <label>Unique ID:</label>
        <input
          type="text"
          name="uniqueId"
          value={formData.uniqueId}
          onChange={handleChange}
        />
        <label>Mot de passe:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
