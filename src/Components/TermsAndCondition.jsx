import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const TermsAndConditions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: '22px' }}>
      <div className="row g-0">
        {/* Main Content */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Terms and Conditions – Akhuwat Foundation Loan</h1>

              <p className="mb-4">
                Welcome to Akhuwat Foundation Loan. By using our website or services, you agree to abide by the following terms and conditions. If you do not agree, please do not use our platform.
              </p>

              <p className="mb-4">
                Akhuwat Foundation Loan reserves the right to modify or update these terms at any time without prior notice. Users are encouraged to review this page regularly.
              </p>

              <h2 className="fw-bold mt-5 mb-4">1. Definitions</h2>
              <p>"Akhuwat Foundation Loan" refers to the loan services provided through our platform.</p>
              <p>"We," "Us," and "Our" refer to the Akhuwat Foundation Loan team.</p>
              <p>"You" or "Your" refers to any individual using our website or applying for a loan.</p>

              <h2 className="fw-bold mt-5 mb-4">2. Website Usage</h2>
              <p>
                By accessing our website, you confirm that you are at least 18 years old and legally capable of entering into agreements. You also agree not to engage in harmful activities such as spreading malware, hacking, or altering website content.
              </p>

              <h2 className="fw-bold mt-5 mb-4">3. Loan Services</h2>
              <p>
                Akhuwat Foundation Loan provides financial assistance to eligible individuals in Pakistan. Applicants must provide accurate information, and approval is not guaranteed. Full loan details, including repayment terms and any applicable fees, will be disclosed before finalization. Timely repayment is mandatory.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Eligibility Criteria</h2>
              <ul className="fw-light mx-5">
                <li>Must be a Pakistani citizen or legal resident</li>
                <li>At least 18 years old</li>
                <li>Possess a valid CNIC</li>
                <li>Have verifiable income or employment</li>
                <li>Provide complete and accurate financial information</li>
              </ul>
              <p>Applications that fail to meet these criteria may be rejected.</p>

              <h2 className="fw-bold mt-5 mb-4">5. Repayment Terms</h2>
              <p>
                Approved loans must be repaid in regular installments, typically monthly. Late payments may result in penalties or a negative impact on your credit history. Early repayment is allowed and may reduce overall costs.
              </p>

              <h2 className="fw-bold mt-5 mb-4">6. Interest Rates and Fees</h2>
              <p>
                Our loans carry low or zero interest depending on the loan type, amount, and term. All applicable fees—including application, processing, and late payment—will be clearly communicated in advance.
              </p>

              <h2 className="fw-bold mt-5 mb-4">7. Privacy Commitment</h2>
              <p>
                Your personal data is used only for processing your loan, eligibility verification, and communication. We do not sell or share your information with third parties unless required by law.
              </p>

              <h2 className="fw-bold mt-5 mb-4">8. Third-Party Links</h2>
              <p>
                Our site may contain links to external websites. We are not responsible for their content or privacy policies. Please review their terms separately.
              </p>

              <h2 className="fw-bold mt-5 mb-4">9. Intellectual Property</h2>
              <p>
                All content on this website—including text, graphics, and branding—is owned by Akhuwat Foundation Loan and protected by intellectual property laws. Reuse or reproduction without permission is strictly prohibited.
              </p>

              <h2 className="fw-bold mt-5 mb-4">10. Prohibited Activities</h2>
              <ul className="fw-light mx-5">
                <li>Submitting false or misleading information</li>
                <li>Engaging in illegal activities such as fraud or money laundering</li>
                <li>Tampering with the website’s code or systems</li>
                <li>Accessing or misusing other users’ data</li>
                <li>Using the platform for unauthorized commercial purposes</li>
              </ul>
              <p>Violations may lead to suspension, legal action, or account termination.</p>

              <h2 className="fw-bold mt-5 mb-4">11. Limitation of Liability</h2>
              <p>
                While we strive to provide reliable and accurate services, we do not guarantee uninterrupted access or error-free functionality. Akhuwat Foundation Loan is not liable for any loss, damage, or inconvenience caused by service use.
              </p>

              <h2 className="fw-bold mt-5 mb-4">12. Account Suspension or Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account for policy violations, fraudulent activity, or non-repayment. Any outstanding balances must still be settled.
              </p>

              <h2 className="fw-bold mt-5 mb-4">13. Governing Law</h2>
              <p>
                These terms are governed by the laws of Pakistan. Any disputes will be handled in Pakistani courts.
              </p>

              <h2 className="fw-bold mt-5 mb-4">14. Amendments</h2>
              <p>
                We may update these terms at any time. Continued use of our services indicates your agreement to the revised terms.
              </p>

              <h2 className="fw-bold mt-5 mb-4">15. Contact Us</h2>
              <p>If you have any questions or concerns, please contact us:</p>
              <p>Email: <a href="mailto:support@AsaanQarzloanschemepk.com">support@AsaanQarzloanschemepk.com</a></p>
              <p>Phone: +92 340 1003463</p>
              <p>Office Address: F-6, Islamabad, Islamabad Capital Territory, Pakistan</p>

              <p className="mt-4 text-muted">Last Updated: October 2024</p>
              <p className="mt-4">Thank you for choosing Akhuwat Foundation Loan. We remain committed to offering transparent, honest, and reliable financial solutions.</p>
            </article>
          </main>
        </div>

        {/* Sidebar */}
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

export default TermsAndConditions;
