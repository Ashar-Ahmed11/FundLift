import React from 'react';
// import CountUp from 'react-countup';
import NumberCounter from '../numberCount';

const StatsCards = () => {
  const color = "#108515"
  return (
    <div className="container py-5" >
    <div className="container py-5" >
      <div className="row justify-content-center">
        <div className="col-md-5 mb-4 my-3">
          <div className="card text-center bg-white h-100 shadow">
            <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
              <div className="mb-2" style={{ color: color, fontSize: '10rem' }}>
                <i className="fa fa-handshake-o" aria-hidden="true"></i>
              </div>
              <h1 className="display-4 fw-bold" style={{ color: color }}>
                <NumberCounter count={100000} />
              </h1>
              <h4 className="fw-semibold mt-2">Projects Completed</h4>
            </div>
          </div>
        </div>

        <div className="col-md-5 mb-4 my-3">
          <div className="card text-center bg-white h-100 shadow">
            <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
              <div className="mb-2" style={{ color: color, fontSize: '10rem' }}>
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <h1 className="display-4 fw-bold" style={{ color: color }}>
                <NumberCounter count={100000} />
              </h1>
              <h4 className="fw-semibold mt-2">Satisfied Clients</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StatsCards;