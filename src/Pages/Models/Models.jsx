import Footer from "../../components/Footer/Footer";
import HeroPages from "../../components/HeroPages/HeroPages";
import CarImg1 from "../../images/cars-big/audi-box.png";
import CarImg2 from "../../images/cars-big/golf6-box.png";
import CarImg3 from "../../images/cars-big/toyota-box.png";
import CarImg4 from "../../images/cars-big/bmw-box.png";
import CarImg5 from "../../images/cars-big/benz-box.png";
import CarImg6 from "../../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";

import "./Models.css";

function Models() {
  return (
    <>
      <section className="modelsSection">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="modelsDiv">
            <div className="modelsBox">
              <div className="modelsBoxImg">
                <img src={CarImg1} alt="car_img" />
                <div className="modelsBoxDescr">
                  <div className="modelsBoxDescrInfo">
                    <div className="modelsBoxDescrName">
                      <p>Audi A1</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="modelsBoxDescrPrice">
                      <h4>$45</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="modelsBoxDescrDetails">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="modelsBoxDescrBtn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="modelsBox">
              <div className="modelsBoxImg">
                <img src={CarImg2} alt="car_img" />
                <div className="modelsBoxDescr">
                  <div className="modelsBoxDescrInfo">
                    <div className="modelsBoxDescrName">
                      <p>Golf 6</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="modelsBoxDescrPrice">
                      <h4>$37</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="modelsBoxDescrDetails">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; VW
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="modelsBoxDescrBtn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="modelsBox">
              <div className="modelsBoxImg">
                <img src={CarImg3} alt="car_img" />
                <div className="modelsBoxDescr">
                  <div className="modelsBoxDescrInfo">
                    <div className="modelsBoxDescrName">
                      <p>Toyota</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="modelsBoxDescrPrice">
                      <h4>$30</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="modelsBoxDescrDetails">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Camry
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="modelsBoxDescrBtn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="modelsBox">
              <div className="modelsBoxImg">
                <img src={CarImg4} alt="car_img" />
                <div className="modelsBoxDescr">
                  <div className="modelsBoxDescrInfo">
                    <div className="modelsBoxDescrName">
                      <p>BMW 320</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="modelsBoxDescrPrice">
                      <h4>$35</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="modelsBoxDescrDetails">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="modelsBoxDescrBtn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="modelsBox">
              <div className="modelsBoxImg">
                <img src={CarImg5} alt="car_img" />
                <div className="modelsBoxDescr">
                  <div className="modelsBoxDescrInfo">
                    <div className="modelsBoxDescrName">
                      <p>Mercedes</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="modelsBoxDescrPrice">
                      <h4>$50</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="modelsBoxDescrDetails">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Benz GLK
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="modelsBoxDescrBtn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="modelsBox">
              <div className="modelsBoxImg">
                <img src={CarImg6} alt="car_img" />
                <div className="modelsBoxDescr">
                  <div className="modelsBoxDescrInfo">
                    <div className="modelsBoxDescrName">
                      <p>VW Passat</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="modelsBoxDescrPrice">
                      <h4>$25</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="modelsBoxDescrDetails">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; CC
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="modelsBoxDescrBtn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
}

export default Models;
