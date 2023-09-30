import React, { useState, useEffect } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Menubar } from "primereact/menubar";
import { PrimeReactContext } from "primereact/api";

const Navbar = () => {
  const [checked, setChecked] = useState(true);
  const [theme, setTheme] = useState("dark");

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
    { label: "Forum", url: "/forum" },
  ];

  const start = (
    <img
      src="./logo192.png"
      className="mainIcon"
      alt="icone principale"
      href="/"
    ></img>
  );

  const end = (
    <div className="flex align-items-center gap-1">
      <i className="pi pi-moon"></i>
      <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
      <i className="pi pi-sun"></i>
    </div>
  );

  return (
    <Menubar
      model={menu}
      start={start}
      className="mb-2 shadow-4 surface-0"
      end={end}
    />
  );
};

export default Navbar;
