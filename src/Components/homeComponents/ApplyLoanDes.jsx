import React, { useEffect, useState } from 'react';
import bgImage from '../../Images/centerImage.png'
const ApplyLoanDes = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="text-white text-center d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    >
      <div className="bg-dark bg-opacity-50  rounded py-5" style={{ width: '100%' }}>
        <div className="container">
          <h1 className={`fw-light fw-normal ${isMobile ? 'fs-3 fs-md-1' : "p-4"}`}>
          Apply for the Akhuwat Loan that fits your needs right away to get started.
          </h1>
          <p className={`fs-5  mx-auto   my-4 ${isMobile ? 'fs-3 fs-md-1 fw-light' : "fw-normal mt-2"}`} style={{ maxWidth: "800px" }}>
          Being financially free is the key to living a useful and satisfying life. It means not having to worry about money and being able to make choices that are in line with your goals, ideals, and dreams. This part talks about what it really means to be financially independent and how you can get there with help from Akhuwat Loan Apply.
          </p>
        </div>
      </div>
    </section>

  )
}

export default ApplyLoanDes
