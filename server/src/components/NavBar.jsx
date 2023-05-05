import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li ><a href="/">Home</a></li>
        <li><a href="/administradores">Administradores</a></li>
        <li><a href="/desarrolladores">Desarrolladores</a></li>
        <li><a href="/departamentos">Departamentos</a></li>
        <li><a href="/monedas">Monedas</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
