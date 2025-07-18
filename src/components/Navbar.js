// import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Navbar({title, mode, myfunction}) {
  return (
      <>
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="to" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href='/' className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    <div className={`form-check form-switch text-${mode==="light"? "dark" : "light" }`} >
  <input className="form-check-input" type="checkbox" onChange={myfunction}  role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " for="flexSwitchCheckDefault">DarkMode</label>
</div>
    </div>
  </div>
</nav>

    </>
  );
};

