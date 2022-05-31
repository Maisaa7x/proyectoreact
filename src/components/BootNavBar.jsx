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
            <div ClassName="container-fluid navbar navbar-light bg-light">
                <a ClassName="navbar-brand">Navbar</a>
                <form ClassName="d-flex">
                    <input ClassName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button ClassName="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default BootNavBar
