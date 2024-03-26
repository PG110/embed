import React from "react";
import HomePageLayout from "../../components/homepagelayout/HomePageLayout";
import MainCarousel from "../../components/corosel/MainCarousel";
import HomeSectionCarousel from "../../components/Homecarousel/HomeSectionCarousel";

const Labtest = () => {
  return (
    <HomePageLayout>
      <div>
        <MainCarousel />
      </div>

      <div className=" py-6">
        <HomeSectionCarousel />
      </div>
      <div className="p-8">
        <h1>The (Pharm)Easy Way To Book Lab Tests Online</h1>
        <p>Book Diagnostics Lab Test Online. Get doorstep sample collection.</p>
        <p>Lab Test Booking Made Simple.</p>
        <p>
          One of the most popular services PharmEasy offers is diagnostic
          testing. People need to book pathological tests for many reasons. But
          before booking, they wonder if the diagnostic centre can be trusted to
          produce accurate results and how long they might have to wait in a
          queue to get tested.
        </p>
        <p>
          To bypass these hassles, PharmEasy has set up an extensive network of
          reputed pathological laboratories in India. One such lab is Thyrocare.
          With Thyrocare on board, we can give you access to a wide network of
          diagnostic laboratories. We also offer a home collection of samples as
          well. Bid adieu to anxious days of wondering where to book diagnostic
          tests and embrace the PharmEasy way.
        </p>
        <h2>Lab tests at your doorstep</h2>
        <p>
          To ease your anxieties, PharmEasy offers the facility of doorstep
          collection. The technician will come to your house to collect samples.
          And all safety precautions are maintained. A fresh collection kit
          and/or needle will be used so that there is no contamination of
          samples of the spread of diseases. We use special ice boxes that meet
          NABL guidelines to transport your samples. The reports will be sent to
          you online. That means you won’t have to travel to the diagnostic lab
          to collect your reports.
        </p>
        <h2>How can you book diagnostic tests online?</h2>
        <p>Booking a test on PharmEasy is simple:</p>
        <ol>
          <li>
            Visit{" "}
            <a href="https://pharmeasy.in/diagnostics">
              pharmeasy.in/diagnostics
            </a>{" "}
            or click on Lab Tests on the PharmEasy website or app.
          </li>
          <li>
            Alternatively, you can call our customer service team on{" "}
            <a href="tel:7022000900">7022000900</a> and they will make the
            booking for you.
          </li>
        </ol>
        <p>Looking to book a pathology test? Here’s how PharmEasy can help!</p>
        <p>
          Online diagnostic tests work as smoothly as clockwork. Once you’ve
          booked the pathology test you need with the diagnostic centre you
          prefer, you will get a confirmation on your registered e-mail id and
          SMS. The backend support team might also call you to confirm the
          booking. Post this our expert technician will arrive at your place at
          the selected slot and collect your sample for processing at our state
          of the art labs. Reports will be shared with you over SMS and will
          also be available in your account on app/web.
        </p>
        <h2>Why choose PharmEasy to book lab tests?</h2>
        <ul>
          <li>2 Lac+ happy customers</li>
          <li>Safe home sample collection</li>
          <li>Up to 70% OFF</li>
          <li>Certified & 100% Automated labs</li>
          <li>Timely and accurate reports</li>
          <li>500+ tests and health packs to choose from</li>
        </ul>
        <p>
          Now that you know why PharmEasy can be your trusted diagnostic test
          booking partner, don’t wait, download the PharmEasy app today and book
          a health check right away.
        </p>
      </div>
    </HomePageLayout>
  );
};

export default Labtest;
