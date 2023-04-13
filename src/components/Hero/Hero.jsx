import { Link } from "react-router-dom";
import BgShape from "../../images/hero/hero-bg.png";
import HeroCar from "../../images/hero/main-car.png";
import { useEffect, useState } from "react";

import "./Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="heroSection">
        <div className="container">
          <img className="bgShape" src={BgShape} alt="bg-shape" />

          <div className="heroContent">
            <div className="heroText">
              <h4>Plan your trip now</h4>

              <h1>
                Save <span>big</span> with our car rental
              </h1>

              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>

              <div className="heroTextBtns">
                <Link onClick={bookBtn} className="bookRide" to="/">
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>

                <Link className="learnMore" to="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img src={HeroCar} alt="car-img" className="heroContentImg" />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
