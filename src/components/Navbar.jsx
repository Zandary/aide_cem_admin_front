import React from "react";

import { Menubar } from "primereact/menubar";

const Navbar = () => {
  const menu = [
    {
      label: "Accueil",
      url: "/",
    },
    {
      label: "Connexion",
      url: "/login",
    },
    { label: "Dashboard", url: "/dashboard" },
    { label: "DataView", url: "/dataview" },
  ];

  const start = (
    <img
      src="./logo192.png"
      className="mainIcon"
      alt="icone principale"
      href="/"
    ></img>
  );

  return <Menubar model={menu} start={start} className="m-2 shadow-4" />;
};

export default Navbar;
