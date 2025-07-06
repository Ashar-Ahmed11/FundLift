import React from 'react';
import CountUp from 'react-countup';
import SecImg from '../Images/12.jpg';
import asaanQarz9 from '../Images/img14.jpg';
import asaanQarz10 from '../Images/img15.jpg';

const akhuwatLoanServices = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize: "22px" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Foundation Loan Services in Pakistan: Helping You Achieve Your Goals and Grow</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          The Akhuwat Foundation helps people and businesses become financially independent by giving them personalized loan choices with no interest. Whether your goal is to go to college, grow your business, or buy a house, Akhuwat makes it easy to get there and stay there.
        </p>
      </div>

      {/* Personal Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">1. Personal loans can help you reach important goals in your life</h2>
          <p>
            Personal loans from Akhuwat Foundation can be used for many things, like medical situations, family events, or other personal costs. Since there is no interest, you can keep your goals in mind without having to worry about making big payments.
          </p>
          <ul>
            <li>Clear Eligibility Criteria: It's easy to apply when the requirements are clear and simple.</li>
            <li>Flexible Payment Options: There are a number of payment plans that can help you easily pay back your loan.</li>
            <li>Quick Processing: Quick acceptance makes sure you get the money you need when you need it most.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={asaanQarz9}
            alt="Money Received"
            className="img-fluid  wm-100 h-100 mt-5 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div
            className="start-0 bg-success text-white p-0"
            style={{ maxWidth: "100%" }}
          >
            <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
            <h2 className="display-4 text-center fw-bold">
              <CountUp end={14} duration={3} suffix="K+" />
            </h2>
          </div>
        </div>
      </div>

      {/* Business Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">2. Business loans: giving entrepreneurs the tools they need to succeed</h2>
          <p>
            Akhuwat helps business owners start or grow their companies by giving them loans with no interest. These loans let you invest in your business, buy the things you need, and make a lasting effect, whether you're starting a new business or growing an existing one.
          </p>
          <ul>
            <li>Customized to Meet Your Money Needs: You can pick from choices that will help you reach your short- and long-term goals.</li>
            <li>Clear Terms: There are no secret fees or hard-to-understand rules.</li>
            <li>Available in a Wide Range of Fields: Tech, marketing, retail, and other companies can use it.</li>
          </ul>
        </div>
      </div>

      {/* Education Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">3. Student loans: Putting money into your future</h2>
          <p>
            The Akhuwat Foundation thinks that education is the key to success. Our student loans don't charge interest, so you can focus on studying full-time. They cover everything from fees and books to living costs.
          </p>
          <ul>
            <li>Covers School Costs: We'll pay for everything, from fees to school supplies.</li>
            <li>Zero Interest: Get rid of the stress of money while you study.</li>
            <li>Flexible Payment Plans: Most plans begin after you graduate to help you get off to a good start.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={asaanQarz10}
            alt="Money Received"
            className="img-fluid  wm-100 h-80 mt-5 card-img-top"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Housing Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">4. Home loans: Getting the house of your dreams</h2>
          <p>
            You can finally buy a house or fix up your old one with Akhuwat's interest-free home loans. These loans are a sensible way to reach one of life's most important goals without having to worry about extra fees.
          </p>
          <ul>
            <li>Choices for Buying or Fixing Up: Pick the loan that works best for your home goals.</li>
            <li>Easy and quick to do: Fewer forms to fill out and quick acceptance.</li>
            <li>Affordable Repayment Plans: These plans make property possible and long-term.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default akhuwatLoanServices;
