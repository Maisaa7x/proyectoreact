import React from 'react'

function BootNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">DAOS Collection</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hombres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mujeres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Escolares</a>
        </li>
      </ul>
        </div>
        </div>
        <button type="button" class="btn btn-primary">Carrito</button>
        </nav>
    )
}

export default BootNavBar
