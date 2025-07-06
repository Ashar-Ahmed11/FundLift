import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import asaanQarz15 from '../Images/img21.jpg';
import asaanQarz16 from '../Images/img22.jpg';
import asaanQarz17 from '../Images/img20.jpg';

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'21px'}}>
      <div className="row g-0">
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">About Us</h1>
              <p className="mb-4">
                Welcome to Akhuwat Foundation Loan, your reliable partner for quick and fair access to money in Pakistan. The foundation was started by Dr. Amjad Saqib in 2023 with the goal of giving people and companies access to low-cost and interest-free loans. Akhuwat is here to help you with your money problems, whether you want to reach personal goals or grow your business. Our financial solutions are clear, reliable, and made to fit your needs.
              </p>
              <div className="my-5 text-center p-4">
                <img 
                  src={asaanQarz15}
                  alt="Akhuwat Foundation Loan Logo" 
                  className="img-fluid rounded shadow-sm mw-100 h-100 card-img-top" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">What We Do</h2>
              <p className="mb-4">
                This is what Akhuwat Foundation Loan is all about: helping people who need money the most. We think that everyone, no matter how much money they have, should be able to get fair and affordable loans. We help people get back in charge of their finances and improve their general health by giving them interest-free loans with flexible payment plans.
              </p>
              <p className="mb-4">
                We know how hard it is to get loans, especially for people in Pakistan who are struggling with money. Because of this, our method is easy to use, quick, and stress-free, so every applicant has the same chance to find solutions that work for them.
              </p>

              <h2 className="fw-bold mt-5 mb-4">Why Should You Get an Akhuwat Foundation Loan?</h2>
              <ol className="fw-light mx-5">
                <li>Quick Approval for Loans</li>
                <p>That's why our easy process guarantees quick approvals—without the long wait times that come with traditional banks.</p>
                <li>Everyone Can Get a Loan</li>
                <p>We have different kinds of loans to meet your needs, from personal and school loans to business and emergency help.</p>
                <li>Fully Open and Honest</li>
                <p>There are no hidden fees or small print; all terms and conditions are made clear from the start.</p>
                <li>Friendly, personalized customer service</li>
                <p>Our team learns about your position so that they can give you the best loan amount and payment plan.</p>
              </ol>

              <h2 className="fw-bold mt-5 mb-4">Get to know our founder, Dr. Amjad Saqib.</h2>
              <p className="mb-4">
                Dr. Amjad Saqib is a well-known and recognized social reformer and visionary. He started Akhuwat Foundation Loan to help underserved communities get ethical, all-inclusive financial help. Dr. Saqib has built a career around reducing poverty and making opportunities easier to get. His guidance has made Akhuwat a well-known name in microfinance in Pakistan.
              </p>
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz16}
                  alt="Akhuwat Foundation Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <p className="mb-4">
                Dr. Saqib started the organization to offer dignity-based lending because he cared about people and knew how hard it was for the country's economy. The loans are cheap and don't charge interest, which has helped thousands of people.
              </p>

              <h2 className="fw-bold mt-5 mb-4">What We Stand For</h2>
              <ul className="fw-light mx-5">
                <li>Being clear: We promise open conversation and build trust by being honest about everything, from how loans work to how we provide service.</li>
                <li>Putting the customer first: Your money needs come first. We listen, help, and show you choices that will really help you reach your goals.</li>
                <li>New ideas: We keep making our services better and easier for everyone to get by using new technology and ideas.</li>
                <li>Impact on Society: We want to do more than just give money; we want to improve neighborhoods, make opportunities available, and support Pakistan's long-term economic health.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Help with Loans</h2>
              <ul className="fw-light mx-5">
                <li>Personal loans: Flexible funds to help pay for things like school, health care, or unexpected costs.</li>
                <li>Business loans: Give founders and small business owners the money they need to start up, run, or grow their businesses.</li>
                <li>College Loans: Students can get low-cost, interest-free loans to help them pay for school and fees.</li>
                <li>Instant Loans: Quick cash help for emergencies or things that didn't go as planned.</li>
                <li>Loans with no interest: Shariah-compliant loan programs were made to help low-income families without making them pay a lot in interest.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Promise to Pakistan</h2>
              <p className="mb-4">
                Akhuwat Foundation Loan is proud of its goal to improve people's lives and make communities stronger. We want to help build a stronger, more welcoming Pakistan by making finance more cheap, honest, and easy to get.
              </p>
              <p className="mb-4">
                We're here to help you get ahead financially, whether you need to pay for school, start a business, or deal with a personal problem.
              </p>
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz17}
                  alt="Akhuwat Foundation Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm card-img-top" 
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">Join the Akhuwat family.</h2>
              <p className="mb-4">
                You're not just getting money when you choose Akhuwat Foundation Loan; you're also getting a partner who wants you to succeed. We want to help you reach your goals in an honest, sure, and direct way.
              </p>
              <p className="mb-4">
                Apply now to see what makes Akhuwat different. It's never been easier to make your dreams come true with services that are quick, safe, and reliable.
              </p>
            </article>
          </main>
        </div>
        {!isMobile && (
          <div className="col-lg-3">
            <div className="sticky-top pr-3" style={{ top: "0", paddingRight: "22px" }}>
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;