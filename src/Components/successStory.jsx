import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import asaanQarz6 from '../Images/img11.jpg';
import asaanQarz7 from '../Images/img12.jpg';
import asaanQarz8 from '../Images/img13.jpg';

const SuccessStory = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: '22px' }}>
      <div className="row g-0">
        <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Success Story: How Loans from the Akhuwat Foundation Changed Lives</h1>

              <p className="mb-4">
                In today's fast-paced world, being financially stable is very important for people to be able to follow their dreams and goals. The Akhuwat Foundation does more than just give people money; it gives them the tools they need to make their lives better.
              </p>

              <p className="mb-4">
                This moving story shows how Akhuwat Foundation Loans have made a difference in people's lives all over Pakistan. One person at a time, Akhuwat continues to make goals come true for students, business owners, and families by making loans easy to get, affordable, and clear.
              </p>

              <div className="my-5 text-center">
                <img
                  src={asaanQarz6}
                  alt="Akhuwat Foundation Loan Logo"
                  className="img-fluid rounded shadow-sm"
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">1. The First Steps Toward Financial Independence</h2>

              <p className="mb-4">
                The Akhuwat Foundation Loan Program was started in 2024 to help regular Pakistanis who are having trouble with money. Dr. Amjad Shah, the company's founder, saw that traditional banking had problems like long processes, high interest rates, and strict requirements that kept many people out. In answer, he made the lending process more fair and open to everyone.
              </p>

              <p className="mb-4">
                The program focused on making things easy, fair, and accessible by having short steps, low or no interest rates, and quick decisions. It was always Akhuwat's goal to give people from all walks of life more power. This useful model gained trust quickly and helped tens of thousands of people get their finances under control and improve their lives.
              </p>

              <h2 className="fw-bold mt-5 mb-4">2. The Journey of a Student: Haseeb's Dream Comes True</h2>

              <p className="mb-4">
                Haseeb Ahmed, a smart student from Lahore, wanted to become an engineer. Even though he did very well in school, he can't afford what he needs for the future. He found the Akhuwat Foundation at that time.
              </p>

              <p className="mb-4">
                Haseeb got the money he needed within 24 hours thanks to Akhuwat's low-cost student loan, easy application process, and open payment terms. This made it possible for him to keep going to school right away.
              </p>

              <p className="mb-4">
                Haseeb is a well-known and respected civil engineer now that he has finished from one of Pakistan's best engineering schools. His journey shows how Akhuwat turns problems with money into real possibilities.
              </p>

              <div className="my-5 text-center">
                <img
                  src={asaanQarz7}
                  alt="Akhuwat Foundation Core Values"
                  className="img-fluid rounded shadow-sm"
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">3. Growing a small business: Sarah's Victory</h2>

              <p className="mb-4">
                When one shop owner put Sarah in touch with Akhuwat Foundation Loans, her life changed for the better. After going to a nearby center, she was interested in the easy requirements for eligibility and loan choices for small business owners.
              </p>

              <p className="mb-4">
                The process was easy, didn't need many papers, and didn't ask for complicated promises. The loan was given to her right away.
              </p>

              <p className="mb-4">
                She fixed up her shop and refilled its shelves with the money. Sarah's shop went from suffering to thriving thanks to Akhuwat's quick and effective help. Her income doubled, and more people came into the area to shop.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Help with Money in an Emergency: Ali's Story</h2>

              <p className="mb-4">
                Life is unexpected, and a lot of people in Pakistan depend on Akhuwat Foundation Loans to get money quickly when they need it.
              </p>

              <p className="mb-4">
                This is shown by Ali's story. He asked Akhuwat for an emergency loan because he had unexpected medical bills and no money on hand. His application was quickly accepted, and the money was sent to him right away.
              </p>

              <p className="mb-4">
                Ali was able to handle the problem without going deeper into debt thanks to the foundation's flexible terms. Because Akhuwat helped him during a tough time, he got better physically and financially.
              </p>

              <h2 className="fw-bold mt-5 mb-4">5. Making it possible for Farhan to buy a house: his new start</h2>

              <p className="mb-4">
                Many Pakistanis have dreamed of owning a home their whole lives, but rising prices make it seem impossible. Akhuwat's home loans make it possible for people to become homeowners by making financing easy to get and cheap.
              </p>

              <p className="mb-4">
                Workers from Rawalpindi's middle class, Farhan Sheikh, had been saving for years but still couldn't get the money for a down payment. He then looked at Akhuwat.
              </p>

              <p className="mb-4">
                The process of getting the loan was quick and easy. He got the money he needed to make his dream come true within a week. Farhan and his family now have their own home, which they used to think was impossible.
              </p>

              <div className="my-5 text-center">
                <img
                  src={asaanQarz8}
                  alt="Akhuwat Foundation Loan Values Diagram"
                  className="img-fluid rounded shadow-sm"
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">6. Making agriculture stronger: Ghulam's Transformation</h2>

              <p className="mb-4">
                Akhuwat Foundation also helps rural areas and agriculture by giving money to farmers. A lot of farmers in Pakistan have trouble paying for good seeds, fertilizer, and new tools that would help them grow more crops.
              </p>

              <p className="mb-4">
                Ghulam Abbas, a farmer from Multan with a lot of knowledge, had the same problems. Even though he worked hard, his wages were low because he used old methods. Normal banks wouldn't give him money because they thought farming was risky.
              </p>

              <p className="mb-4">
                That's when he went up to Akhuwat. Within a week, he had the cash, which he used to buy good seeds, a new irrigation system, and other farming tools. He tripled his crops' yields and made a lot more money. This shows how getting access to the right tools can change people's lives in rural areas.
              </p>

              <h2 className="fw-bold mt-5 mb-4">The Akhuwat Foundation is making a difference in Pakistan.</h2>

              <p className="mb-4">
                Akhuwat Foundation Loans have made a huge difference in the lives of many people, from students and small companies to farmers and families. The experiences of Haseeb, Sarah, Ali, Farhan, and Ghulam show how easy and fair funding can open up new chances and make the future better.
              </p>

              <p className="mb-4">
                As part of its 2025 Loan Scheme, Akhuwat Foundation is still dedicated to giving people clear, low-cost money options that break down barriers and give them power. Its clear goal is to give every Pakistani the tools they need to make tomorrow safer and more effective.
              </p>
            </article>
          </main>
        </div>

        {!isMobile && (
          <div className="col-lg-3">
            <div className="sticky-top pr-3" style={{ top: '0', paddingRight: '22px' }}>
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessStory;
