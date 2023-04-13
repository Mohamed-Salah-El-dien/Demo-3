import Footer from "../../components/Footer/Footer";
import HeroPages from "../../components/HeroPages/HeroPages";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import AboutMain from "../../images/about/about-main.jpg";
import Box1 from "../../images/about/icon1.png";
import Box2 from "../../images/about/icon2.png";
import Box3 from "../../images/about/icon3.png";

import "./About.css";

function About() {
  return (
    <>
      <section className="aboutPage">
        <HeroPages name="About" />
        <div className="container">
          <div className="aboutMain">
            <img className="aboutImg" src={AboutMain} alt="car-renting" />
            <div className="aboutText">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="aboutIcons">
                <div className="aboutIconsBox">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="aboutIconsBox">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="aboutIconsBox">
                  <img src={Box3} alt="car-icon" className="lastImg" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="bookBanner">
        <div className="bannerOverlay"></div>
        <div className="container">
          <div className="textContent">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
