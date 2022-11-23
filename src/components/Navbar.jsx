import React from 'react';
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">Tienda YA</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07XL">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li classNameName="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Cuenta</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Perfil</a></li>
            </ul>
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