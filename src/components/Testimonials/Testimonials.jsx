import Person2 from "../../images/team/5.png";
import Person3 from "../../images/team/3.png";

import "./Testimonials.css";

function Testimonials() {
  return (
    <>
      <section className="testimonialsSection">
        <div className="container">
          <div className="testimonialsContent">
            <div className="testimonialsTitle">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="allTestimonials">
              <div className="testimonialsBox">
                <span className="quotesIcon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="testimonialsName">
                  <div className="testimonialsProfile">
                    <img src={Person2} alt="user_img" />
                    <span>
                      <h4>jacob steel</h4>
                      <p>Belgrade</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonialsBox box-2">
                <span className="quotesIcon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="testimonialsName">
                  <div className="testimonialsProfile">
                    <img src={Person3} alt="user_img" />
                    <span>
                      <h4>Emily hart</h4>
                      <p>Novi Sad</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
