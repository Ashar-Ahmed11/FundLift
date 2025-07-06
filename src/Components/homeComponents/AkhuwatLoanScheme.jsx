import React from 'react';
import asaanQarz3 from '../../Images/img10.jpg'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Credit Plan for the Akhuwat Foundation</h1>
            
            <p className="mb-4 fw-bold mt-1">
            The Akhuwat Foundation provides an easy-to-use method for everyone to pay back their loans. Getting financial help is quick and easy because there isn't much paperwork to fill out and the return process is easy. People all over Pakistan believe the foundation because it has a policy of not charging interest or very low interest.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              If you ever need help or advice, the staff at Akhuwat Foundation's main office is always there for you. Their dedicated and helpful staff makes sure that your loan process goes smoothly and without any worry.
              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src={asaanQarz3 }
              alt="Akhuwat Foundation Loan Scheme Details in Urdu" 
              className="card-img-top "
              // style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;