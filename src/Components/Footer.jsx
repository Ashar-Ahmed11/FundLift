import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" text-white" style={{backgroundColor:'#4e4e4f'}}>
      <div className="container py-5">
        <div className="row">
          {/* Akhuwat Foundation Foundation Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Akhuwat Foundation Foundation</u>
            </h3>
            <p>
              It was started by Dr. Amjad Saqib in 2001 and has since become the biggest provider of interest-free microfinance in the world. Akhuwat's goal is to improve neighbourhoods and lower poverty across Pakistan. To start, they gave a widow a small loan of Rs. 10,000. What began as a single act of kindness has grown into a nationwide movement that has changed millions of lives by offering interest-free loans and all-around social support.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Quick Links</u>
            </h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Contact Us – Swift Loans</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Success Story: Empowering Lives through Akhuwat Foundation Loan</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Welcome to Akhuwat Foundation Loan – Pakistan's Leading Loan Provider</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-md-4 ">
            <h3 className="mb-4 text-white fw-bold">
              <u>Newsletter</u>
            </h3>
            <p>
             Join us this month as we dive into the latest trends in technology, health, and lifestyle. Discover practical insights to boost your well-being and make informed choices for a healthier, more fulfilling life!

            </p>
            <div className="input-group mt-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                aria-label="Email"
              />
              <button 
                className="btn btn-success" 
                type="button"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-dark py-3 text-white">
  <div className="container d-flex justify-content-between align-items-center flex-wrap">
    <div className="small">
      © Copyright Swift Loan Pakistan. All rights reserved. (APM Id : Webs_Info_875)
    </div>
    <div>
      <Link to="/disclaimer" className="me-3 small text-white text-decoration-none">Disclaimer</Link>
      <Link to="/privacy-policy" className="me-3 small text-white text-decoration-none">Privacy Policy</Link>
      <Link to="/terms-and-conditions" className="small text-white text-decoration-none">Terms and Conditions</Link>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;