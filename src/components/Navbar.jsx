import React, { useEffect, useContext } from "react";
import { AuthContext } from "../controllers/AuthContext";
import { Menubar } from "primereact/menubar";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const menu = [
    {
      label: "Accueil",
      url: "/",
    },
    {
      label: "Connexion",
      url: "/login",
    },
    { label: "Forum", url: "/forum" },
  ];

  if (isLoggedIn) {
    menu.push({ label: "Dashboard", url: "/dashboard" });
  }
  
  const logout = () => {
    setIsLoggedIn(false)
    navigate("/login");
  } 

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
      
      <Button icon="pi pi-power-off" onClick={logout} size="small"/>
      {isLoggedIn ? "true" : "false"}
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
