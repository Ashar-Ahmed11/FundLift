
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Contact Us – Akhuwat Foundation Loans</h1>

              <p className="mb-4">
              At Akhuwat Foundation Loan, we're dedicated to providing excellent customer service and making sure that your financial journey goes smoothly and without any problems. Our skilled team is ready to help you every step of the way, whether you're starting the loan application process, want to know more about what we have to offer, or need help with an ongoing request.
              </p>

              <p className="mb-4">
              Because your satisfaction is our top goal, we value your time and are committed to responding quickly and effectively to your concerns.
              </p>

             

              <h2 className="fw-bold mt-5 mb-4">Get in Touch With Us</h2>

              <div className="contact-methods">
                <div className="contact-method mb-4">
                  <h3 className="fw-bold">1. Help by email</h3>
                  <p>
                  Do you need help or have a question? If you email us, someone from our customer service team will get back to you within 24 hours. We're here to give you clear, quick answers, whether you have questions about your loan application or just need general advice.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">2. Call us</h3>
                  <p>
                  Would you rather talk directly? Our customer service line is open from 9 AM to 6 PM (Pakistan Standard Time) Monday through Friday. Call us if you want to know more about loan choices, requirements, or the status of your application. We're here to help.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">3. Come to our office</h3>
                  <p>
                  You are welcome to visit our office close to Islamabad if you need help in person. Talk to a loan agent in person about your money problems and get advice that is specially made for you.
                  </p>
                </div>
              </div>

              <div className="office-address mb-4">
                <h2 className="fw-bold">Office Address: Dasti Loan</h2>
                <p>F-6, Islamabad, Islamabad Capital Territory, Pakistan.</p>
              </div>

              <div className="map-container mb-4 text-center p-5">
                <img 
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/map-1536x860.png" 
                  alt="Office Location Map" 
                  className="img-fluid rounded  p-5" 
                />
              </div>

              <div className="quote-section mb-4">
                <h3 className="fw-bold">Ask for a Free Loan Consultation</h3>
                <p>
                We can help you with a personalized loan for free, whether you're ready to apply or just looking into your choices. Get in touch with us to get a price that fits your needs. We will help you find the best interest-free loan option and walk you through the application process step by step. We will also answer all of your questions.
                </p>
                <p>Contact us today to take the first step toward financial freedom. Dasti Loan can help you reach your financial goals.</p>
              </div>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3">
            <div
              className="sticky-top pr-3"
              style={{ top: "0", paddingRight: "22px" }}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

