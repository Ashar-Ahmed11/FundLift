import React from 'react';
import centerImg from '../../Images/loangraphic.png'
const AkhuwatLoanBanner = () => {
  return (
    <div className="container my-4">
      <div className="row ">
        {/* Left column with text */}
        <div className="col-md-6 p-5 d-flex align-items-center order-2">
          <div>
            <p className="fs-6 fw-light">
            Welcome to the Akhuwat Loan Scheme, which will help you get rich and become successful. In today's economy, where things change quickly, becoming financially free is more than just a goal. It's a path to a more safe and bright future. We at Akhuwat Loan Apply know how important it is to be financially independent. That's why we want to give you the tools, advice, and support you need to reach your full potential and make your dreams come true.
            </p>
            <p className="mt-3">
              How to Apply for Akhuwat Loan – <a href="/" className="text-primary text-decoration-none fw-bold">ApplyAkhuwatLoan</a>:
            </p>
          </div>
        </div>

        {/* Right column with image content */}
        <div className="col-md-6  p-0 d-flex justify-content-center order-1 ">
          <img data-aos-duration="1500" data-aos="fade-left" src={centerImg} alt="" style={{ maxWidth: "75%", height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default AkhuwatLoanBanner;