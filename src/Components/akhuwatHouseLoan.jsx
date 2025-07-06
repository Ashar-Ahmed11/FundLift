import React from 'react';
import CountUp from 'react-countup';
import asaanQarz13 from '../Images/img18.jpg';
import asaanQarz14 from '../Images/img19.jpg';

const akhuwatHouseLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize:'22px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Make Your Dream of Homeownership a Reality with Akhuwat Foundation</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          Akhuwat Foundation is helping turn the dream of owning a home into a reality for thousands of Pakistanis. Traditional mortgages are often out of reach for many individuals, preventing them from becoming homeowners. Akhuwat addresses this gap by offering interest-free housing loans to those who need financial assistance the most.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Simple and Affordable Housing Loans</h2>
          <p>
            Whether you’re looking to purchase a house or renovate an existing one, Akhuwat Foundation ensures a straightforward and budget-friendly process. Countless people across Pakistan have already secured homes through this no-interest loan program.
          </p>
          <ul>
            <li>Unlike conventional home financing that requires assets or land as collateral, Akhuwat’s housing loans require no security at all, making them ideal for individuals without substantial financial backing.</li>
            <li>Repayment plans are tailored according to your income and financial condition, ensuring that monthly installments remain manageable. This flexibility allows borrowers to stay financially stable as they work toward homeownership.</li>
            <li>Akhuwat is also committed to supporting underserved and low-income segments of society by making affordable housing a reality. These loans provide families with secure shelter, economic resilience, and an overall better quality of life.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={asaanQarz13}
            alt="Money Received"
            className="img-fluid wm-100 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING FAMILIES</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" /></h2>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Who Should Apply?</h2>
          <p>
            These housing loans are perfect for any Pakistani citizen who is in urgent need of safe and secure housing. Whether you want to construct, purchase, or renovate your home, this program is designed to support you.
          </p>
          <ul>
            <li><strong>Best for Low-Income Households:</strong> Tailored to meet the needs of families and individuals with limited income.</li>
            <li><strong>Minimal Documentation:</strong> Only essential documents such as your CNIC and address verification are required.</li>
            <li><strong>Community-Based Support:</strong> Strong ties and good recommendations within your community can strengthen your application.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={asaanQarz14}
            alt="Housing Help"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">HOMES BUILT</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={8000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">Steps to Apply for a Home Loan from Akhuwat Foundation</h2>
          <ul>
            <li><strong>Check Your Eligibility:</strong> Ensure that you are a Pakistani national in genuine need of housing assistance.</li>
            <li><strong>Prepare Your Documents:</strong> Collect your CNIC, proof of income, and a brief explanation of your housing need (whether to build, buy, or renovate).</li>
            <li><strong>Submit the Application:</strong> Visit your nearest Akhuwat Foundation center to complete and submit your loan application.</li>
            <li><strong>Application Review:</strong> Akhuwat’s team will thoroughly assess your request. If approved, you’ll be notified promptly.</li>
            <li><strong>Receive Your Loan Funds:</strong> After approval, the loan amount will be disbursed according to the agreed terms, so you can begin your housing project immediately.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default akhuwatHouseLoan;
