import React from 'react'
import logo from '../Images/logo.png'
import {
  Link
} from "react-router-dom";


const Navbar = () => {
  return (
    <>
  <nav className="py-2 navbar  w-90 p-3 navbar-expand-lg sticky-top "style={{ height: '80px', backgroundColor:'#f7f8f9'}}>
  <div className= " container-fluid d-flex justify-content-between " style={{ width: '80%' }}>
    <Link className="navbar-brand me-3" to="/"><img className='' style={{ width: '60px' }} src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav"  style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem' }}>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-2">
          <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link fs-5 fw-bold" to="/success-story">Success Story</Link>
        </li>
        <li className="nav-item dropdown mx-2">
  <Link
    className="nav-link fs-5 fw-bold dropdown-toggle"
    to="/akhuwat-loan-service"
    role="button"
    aria-expanded="false"
  >
    Akhuwat Foundation Loan Service
  </Link>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/akhuwat-bussiness-loan">Akhuwat Foundation Business Loan</Link></li>
    <li><Link className="dropdown-item" to="/akhuwat-house-loan">Akhuwat Foundation House Loan</Link></li>
  </ul>
</li>

        <li className="nav-item mx-2">
          <Link className="nav-link fs-5 fw-bold" to="/about-us">About Us</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link fs-5 fw-bold" to="/contact-us">Contact US</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
