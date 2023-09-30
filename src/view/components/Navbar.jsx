import React from "react";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = [
    {
      label: "Accueil",
      url: "/",
    },
    {
      label: "Créer un post",
      url: "/create",
    },
  ];

  return (
    <div className="card m-1">
      <Menubar model={menu} />
    </div>
  );
};

export default Navbar;
