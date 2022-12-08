import React from 'react';
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand fs-4" to={"/"}>Tienda YA</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07XL">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="active" to={"/"}>Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="active" to={"/categoria/ventiladores"}>Ventiladores</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="active" to={"/categoria/celulares"}>celulares</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="active" to={"/categoria/televisores"}>Televisores</NavLink>
          </li>
        </ul>

       <CartWidget />

       </div>
    </div>
  </nav>
    </div>
  );
};

export default Navbar;