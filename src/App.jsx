
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SuccessStory from './Components/successStory';
import AkhuwatLoanService from './Components/akhuwatLoanService';
import AkhuwatBussinessLoan from './Components/akhuwatBussinessLoan';
import AkhuwatHouseLoan from './Components/akhuwatHouseLoan';
import AboutUs from './Components/aboutUs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndCondition from './Components/TermsAndCondition';
import Disclaimer from './Components/Disclaimer';
import ContactUS from './Components/contactUs';
import {

  Switch,
  Route,

} from "react-router-dom";

import AppContext from './Components/context/appContext';
import { useContext } from 'react'
import Admin from './Components/adminPanel/admin';
import Dashboard from './Components/adminPanel/dashboard';
import AllUsers from './Components/adminPanel/allUser';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const context = useContext(AppContext)
  const { siteData } = context
const color = "#108515"
const location = useLocation()

  return (

    <>
      {siteData && <div>{<div className='whatsapp brand-image'>
        <p className='my-0 mx-2 pl-2 fw-bold' style={{ fontSize: "11px", width: '70px', textAlign: 'center', color: color }}>Akhuwat Foundation Live Support</p>
        {/* 923428347762 */}
        <a className='mx-3' target="_blank" aria-label="Chat on WhatsApp" href={`https://wa.me/${siteData.phone.replace(" ", "").replace(/^0/, '92')}?text=اخوت فاؤنڈیشن کی طرف سے ہم اپ کی کیا مدد کر سکتے ہیں`}> <i style={{ color: '#0dc143' }} className="fa fa-whatsapp" aria-hidden="true"></i> </a>
      </div>}

        <div className='phonenum brand-image'>
          <p className='m-0 fw-bold' style={{ fontSize: "11px", width: '55px', textAlign: 'center', color: color }}>Akhuwat Foundation Head Office No.</p>
          {/* 923428347762 */}
          <a aria-label="Chat on WhatsApp" href={`tel:$${siteData.description.replace(" ", "").replace(/^0/, '92')}`}> <i style={{ color: '#0dc143' }} className="fa fa-phone-square" aria-hidden="true"></i> </a>
        </div>
      </div>}
      <div className="overflow-hidden whitespace-nowrap relative" style={{ backgroundColor: color }}>
        <div className="d-flex headlineMove" style={{ fontWeight: 'bold', width: 'max-content' }}>
          <p className="p-2 m-0 text-white">
            Since 2001, Akhuwat Foundation visionary leadership, integrity, compassion, and dedication have empowered millions through interest-free loan services. For Easy Loan service please contact Akhuwat Foundation Head Office No. {siteData&&siteData.phone}
          </p>
          <p className="p-2 m-0 text-white">
            Since 2001, Akhuwat Foundation visionary leadership, integrity, compassion, and dedication have empowered millions through interest-free loan services. For Easy Loan service please contact Akhuwat Foundation Head Office No. {siteData&&siteData.phone}
          </p>
        </div>
      </div>

      {(location.pathname !== "/admin" && location.pathname !== "/admin-dashboard") && <Navbar />}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/success-story">
          <SuccessStory />
        </Route>
        <Route exact path="/akhuwat-loan-service">
          <AkhuwatLoanService />
        </Route>
        <Route exact path="/akhuwat-bussiness-loan">
          <AkhuwatBussinessLoan />
        </Route>
        <Route exact path="/akhuwat-house-loan">
          <AkhuwatHouseLoan />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/contact-us">
          <ContactUS />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/disclaimer">
          <Disclaimer />
        </Route>
        <Route exact path="/terms-and-conditions">
          <TermsAndCondition />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/admin-dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/all-users">
          <AllUsers />
        </Route>
      </Switch>
      {(location.pathname !== "/admin" && location.pathname !== "/admin-dashboard") && <Footer />}
    </>
  );
}

export default App;
