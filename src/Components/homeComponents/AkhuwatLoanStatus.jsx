import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/appContext";
import asaanQarz22 from '../../Images/img9.jpg'
const AkhuwatLoanStatus = () => {
  const { fetchUserByCnic } = useContext(AppContext);
  const [cnicNumber, setCnicNumber] = useState("");
  const [user, setUser] = useState(null);
  const [modalInstance, setModalInstance] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const modalEl = document.getElementById("userInfoModal");
    if (!modalEl) return;

    const bsModal = new window.bootstrap.Modal(modalEl);
    setModalInstance(bsModal);

    const handleClose = () => {
      setUser(null);
      setLoading(false);
    };

    modalEl.addEventListener("hidden.bs.modal", handleClose);
    return () => modalEl.removeEventListener("hidden.bs.modal", handleClose);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fetchedUser = await fetchUserByCnic(cnicNumber);
    setUser(fetchedUser && fetchedUser._id ? fetchedUser : null);
    setLoading(false);
    modalInstance?.show();
  };
  const color = "#108515"

  return (
    <div className="container py-5" id='loan-status'>
      <div className="row align-items-center justify-content-center">
        {/* Left column: Form */}
        <div className="col-md-6 mb-4">
          <div className="shadow rounded p-4 bg-white">
            <img
              src={asaanQarz22}
              style={{height:"150px",objectFit:'cover'}}
              alt="Akhuwat Foundation Loan Banner"
              className="card-img-top rounded mb-3"
            />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Enter Your CNIC Number"
                  value={cnicNumber}
                  onChange={(e) => setCnicNumber(e.target.value)}
                  required
                />
              </div>
              <button type="submit" style={{backgroundColor:color,color:"#ffffff"}} className="btn w-100 py-3" disabled={loading}>
                {loading ? (
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <span className="spinner-border spinner-border-sm" role="status" />
                    Checking...
                  </div>
                ) : (
                  <>Proceed →</>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right column: Info */}
        <div className="col-md-6 p-5">
          <h2 className="fw-bold mb-3">Always Keep an Eye on Your Loan</h2>
          <p>
            Entering your CNIC number is all it takes to check on the progress of your Akhuwat Foundation loan application. You can also use the Akhuwat Foundation Loan WhatsApp Helpline to get help or ask questions right away. 
          </p>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="userInfoModal"
        tabIndex="-1"
        aria-labelledby="userInfoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userInfoModalLabel">
                Loan Status
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {loading ? (
                <div className="d-flex justify-content-center py-3">
                  <div className="spinner-border text-primary" role="status" />
                </div>
              ) : user ? (
                <>
                  <p>
                    <strong>Name:</strong> {user.firstName} {user.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phoneNumber}
                  </p>
                  <p>
                    <strong>Applied Loan Amount:</strong> PKR{user.loanAmount}
                  </p>
                  <p>
                    <strong>Loan Status:</strong>{" "}
                    <span
                      className={`fw-bold ${
                        user.loanStatus === "approved"
                          ? "text-success"
                          : user.loanStatus === "rejected"
                          ? "text-danger"
                          : "text-warning"
                      }`}
                    >
                      {user.loanStatus}
                    </span>
                  </p>
                </>
              ) : (
                <p className="text-center text-danger fw-bold">
                  No loan request found for this CNIC.
                </p>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatLoanStatus;
