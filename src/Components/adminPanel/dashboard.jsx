import React, { useContext, useState } from 'react';
import AppContext from '../context/appContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AllUser from './allUser';

const Dashboard = () => {
  const context = useContext(AppContext);
  const { loadingNumber ,adminToken, setAdminToken, siteData, setSiteData, editSiteInfo, editLoader } = context;
  const history = useHistory();

  if (!adminToken) {
    history.push("/admin");
  }

  const [currentView, setCurrentView] = useState("Basic");

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Admin Panel</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <button onClick={() => setAdminToken(null)} className="btn btn-outline-danger">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container my-3">
        {/* Navigation Tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${currentView === "Basic" ? "active" : ""}`}
              onClick={() => setCurrentView("Basic")}
            >
              Basic Settings
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentView === "AllUser" ? "active" : ""}`}
              onClick={() => setCurrentView("AllUser")}
            >
              All Users
            </button>
          </li>
        </ul>
      </div>
{loadingNumber && (
    <div className="text-center my-4">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )}
      <div className="container my-5">
        {currentView === "Basic" && siteData && (
          <div className="my-3">
            <h4>Site Whatsapp Number</h4>
            <input
              value={siteData.phone}
              onChange={(e) => setSiteData({ ...siteData, phone: e.target.value })}
              type="text"
              placeholder="Site Whatsapp Number"
              className="form-control my-2"
            />
            <h4>Site Phone Number</h4>
            <input
              value={siteData.description}
              onChange={(e) => setSiteData({ ...siteData, description: e.target.value })}
              type="text"
              placeholder="Site Phone Number"
              className="form-control my-2"
            />
            <h4>Site Easypaisa Number</h4>
            <input
              value={siteData.easypaisa}
              onChange={(e) => setSiteData({ ...siteData, easypaisa: e.target.value })}
              type="text"
              placeholder="Site Easypaisa Number"
              className="form-control my-2"
            />
            <h4>Site Jazzcash Number</h4>
            <input
              value={siteData.jazzcash}
              onChange={(e) => setSiteData({ ...siteData, jazzcash: e.target.value })}
              type="text"
              placeholder="Site Jazzcash Number"
              className="form-control my-2"
            />
            <h4>Loan Fee</h4>
            <input
              value={siteData.loanfee}
              onChange={(e) => setSiteData({ ...siteData, loanfee: e.target.value })}
              type="text"
              placeholder="Loan Fee"
              className="form-control my-2"
            />

            <div className="d-flex">
              <button disabled={editLoader} onClick={() => editSiteInfo()} className="btn btn-outline-primary my-2">
                Save Changes
              </button>
              {editLoader && (
                <div className="p-2">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {currentView === "AllUser" && <AllUser />}
      </div>
    </div>
  );
};

export default Dashboard;
