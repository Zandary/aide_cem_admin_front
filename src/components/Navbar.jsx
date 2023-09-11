import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        <img
          src="./logo192.png"
          className="mainIcon"
          alt="icone principale"
        ></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Accueil
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">
              Connexion
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">
              Inscription
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
