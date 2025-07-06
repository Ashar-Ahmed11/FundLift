import React from 'react';
import CountUp from 'react-countup';
import myImg from '../Images/Loan Scheme.jpg';
import asaanQarz11 from '../Images/img16.jpg';
import asaanQarz12 from '../Images/img17.jpg';

const AkhuwatBusinessLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1100px", margin: "0 auto", fontSize: '22px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Foundation Business Loan: Empowering Entrepreneurs Across Pakistan</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          Akhuwat Foundation’s Business Loan initiative is designed to uplift aspiring and existing entrepreneurs across Pakistan. Whether you're starting a shop, launching a service, or expanding production, Akhuwat offers a reliable, interest-free financial solution for your journey.
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          With easy access and supportive repayment plans, Akhuwat enables you to grow your business without traditional financial stress, while contributing to economic development in local communities.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Why Choose Akhuwat Business Loan?</h2>
          <p>Secure funding with no collateral required — safe, straightforward, and designed with you in mind.</p>
          <ul>
            <li><strong>Interest-Free Support:</strong> Expand your business without the burden of traditional bank interest.</li>
            <li><strong>Adaptable Repayment Options:</strong> Choose a payment schedule that matches your income and business growth.</li>
            <li><strong>Focused on Small Enterprises:</strong> Helps create local jobs and supports grassroots business development.</li>
            <li><strong>Inclusive Opportunity:</strong> Designed for underserved entrepreneurs to foster a more equitable economy.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 ">
          <img
            src={asaanQarz11}
            alt="Business Loan Support"
            className="img-fluid wm-105 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING ENTREPRENEURS</p>
            <h2 className="display-4 text-center fw-bold">
              <CountUp end={14} duration={3} suffix="K+" />
            </h2>
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">How to Apply for an Akhuwat Business Loan</h2>
          <p>
            Follow these simple steps to start your entrepreneurial journey with Akhuwat:
          </p>
          <ul>
            <li><strong>Check Eligibility:</strong> Ensure you meet the basic criteria for applying. It saves time and confirms your qualification.</li>
            <li><strong>Prepare Documentation:</strong> Gather necessary documents like CNIC, residence proof, and business details to smoothen the process.</li>
            <li><strong>Submit Application:</strong> Fill out and submit the loan form with accurate details to avoid processing delays.</li>
            <li><strong>Approval & Disbursement:</strong> Once approved, receive the funds promptly and start implementing your plans.</li>
            <li><strong>Repayment:</strong> Repay in manageable installments as per the agreed schedule, ensuring continued eligibility for future support.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6  p-3">
          <img
            src={asaanQarz12}
            alt="Entrepreneur Support"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">BUSINESSES SUPPORTED</p>
            <h2 className="display-4 text-center fw-bold">
              <CountUp end={8000} duration={3} suffix="+" />
            </h2>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">What Makes Akhuwat Business Loans Different?</h2>
          <p>
            Akhuwat’s business loans are tailored for entrepreneurs at every level, removing financial obstacles and providing real opportunities for sustainable business development.
          </p>
          <p>
            These loans contribute not only to individual growth but also uplift entire communities by fostering job creation, stimulating local markets, and advancing collective prosperity.
          </p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Be Part of the Akhuwat Mission</h2>
          <p>
            Ready to take the next step for your business? Akhuwat Business Loans are here to support your vision. Visit your nearest Akhuwat Foundation center or apply online to start building your business today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatBusinessLoan;
