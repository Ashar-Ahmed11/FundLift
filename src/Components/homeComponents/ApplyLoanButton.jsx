import React from 'react'
import { Link } from 'react-scroll';

const ApplyLoanButton = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center mx-3 text-center"
      style={{ minHeight: '5vh', marginTop:'80px' }}
    >
      <div
        className="p-4 flex-wrap pt-3"
        data-aos="fade-left"
        data-aos-duration="1500"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '4px 4px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '700px',
          cursor: 'pointer'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <div
              style={{
                backgroundColor: '#108515',
                borderRadius: '10px',
                padding: '8px',
                marginRight: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            > */}
          {/* <span style={{ fontSize: '20px' }}>📞</span> */}
          {/* </div> */}
          <span
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#108515'
            }}
          >
            Akhuwat Foundation
          </span>
        </div>
        {/* <span
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#108515'
            }}
          >
            
          </span> */}
        <Link
          className="btn btn-primary"
          to="loan-form"
          role="button"
          style={{ backgroundColor: '#108515', color: 'white' }}
          type="button"
        >
          Apply Loan
        </Link>
      </div>
    </div>
  )
}

export default ApplyLoanButton
