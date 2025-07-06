import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import asaanQarz18 from '../Images/img23.jpg';

const PrivacyPolicy = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: "22px" }}>
      <div className="row g-0">
        {/* Main Content */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Privacy Policy</h1>

              <p className="mb-4">
                At Akhuwat Foundation Loan, we deeply value the trust you place in us when you share your personal information. Your privacy is extremely important to us, and we are committed to protecting your data with the highest level of care and security. This Privacy Policy outlines how we collect, use, and safeguard your personal data when you use our website or services. By using our platform, you agree to the terms outlined in this policy.
              </p>

              <div className="my-5 text-center">
                <img
                  src={asaanQarz18}
                  alt="Soft Loan Pakistan"
                  className="img-fluid rounded shadow-sm"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                <strong>Personal Information:</strong> When applying for a loan, we may collect your name, contact details, CNIC, income and employment details, and banking information. This data may be gathered via forms, phone calls, or face-to-face meetings.
              </p>
              <p className="mb-4">
                <strong>Non-Personal Information:</strong> We use cookies and other tools to collect browsing behavior, device type, IP address, and general usage data that helps us improve the user experience.
              </p>

              <h2 className="fw-bold mt-5 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                Your information is used to assess and process your loan applications, provide customer support, enhance our services, and ensure compliance with legal and regulatory requirements. Promotional communication is optional and can be opted out of at any time.
              </p>

              <h2 className="fw-bold mt-5 mb-4">3. Sharing of Information</h2>
              <p className="mb-4">
                Your data may be shared with trusted service providers who help us deliver our services (such as loan processing). If required by law or during mergers or acquisitions, we may transfer information. However, we do not rent or sell your personal data to marketers.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Data Security</h2>
              <p className="mb-4">
                All personal data is encrypted in transit and stored securely. Access is restricted to authorized personnel only. We regularly audit and update our systems for vulnerabilities. While we follow industry best practices, no online method is entirely secure.
              </p>

              <h2 className="fw-bold mt-5 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies to personalize your experience, monitor website activity, and improve site functionality. These cookies may also be used for advertising purposes based on your previous interactions.
              </p>

              <h2 className="fw-bold mt-5 mb-4">6. Your Rights</h2>
              <p className="mb-4">
                You can access, modify, or request correction of your personal information at any time. If you believe your data is outdated or incorrect, contact us using the details at the bottom of this page.
              </p>

              <h2 className="fw-bold mt-5 mb-4">7. Data Retention</h2>
              <p className="mb-4">
                We retain your data only as long as necessary for the purposes it was collected, in compliance with legal and operational requirements.
              </p>

              <h2 className="fw-bold mt-5 mb-4">8. External Website Links</h2>
              <p className="mb-4">
                Our site may include links to third-party websites. Please note, we are not responsible for the content or privacy practices of those external platforms. We encourage you to review their privacy policies individually.
              </p>

              <h2 className="fw-bold mt-5 mb-4">9. Policy Changes</h2>
              <p className="mb-4">
                We reserve the right to update this privacy policy as needed. Any significant changes will be posted on our website or communicated via email.
              </p>

              <h2 className="fw-bold mt-5 mb-4">10. Get in Touch</h2>
              <ul className="fw-light mx-5">
                <li>Email: support@AsaanQarzloanschemepk.com</li>
                <li>Phone: +92 0346 0760718</li>
                <li>Address: F-6, Islamabad, Islamabad Capital Territory, Pakistan.</li>
              </ul>

              <p className="text-muted mt-4">Last Updated: October 2024.</p>
            </article>
          </main>
        </div>

        {/* Sidebar */}
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

export default PrivacyPolicy;
