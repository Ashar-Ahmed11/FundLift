import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Disclaimer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light">
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5" style={{fontSize:'22px'}}>
              <h1 className="fw-bold pr-4 py-4">Disclaimer</h1>
              <p>The Akhuwat Foundation Loan Program helps people in need by giving them money and advice. In return, borrowers agree to pay back the loan according to the terms and conditions that were set out when the loan was approved. Once a loan is given, Akhuwat Foundation is not responsible for any problems or loses the borrower may have with their money. People who want to borrow money should really think about their finances carefully before they apply for a loan.</p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
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

export default Disclaimer;
