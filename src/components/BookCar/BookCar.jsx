import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import CarAudi from "../../images/cars-big/audia1.jpg";
import CarGolf from "../../images/cars-big/golf6.jpg";
import CarToyota from "../../images/cars-big/toyotacamry.jpg";
import CarBmw from "../../images/cars-big/bmw320.jpg";
import CarMercedes from "../../images/cars-big/benz.jpg";
import CarPassat from "../../images/cars-big/passatcc.jpg";

import "./BookCar.css";

const BookCar = () => {
  const [modal, setModal] = useState(false); //  class - active-modal
  const [error, setError] = useState(false);
  const [doneMsg, setDoneMsg] = useState(false);
  const [imgURL, setImgURL] = useState();

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();

    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      setError(true);
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".bookingModal");
      modalDiv.scroll(0, 0);
      setError(false);
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    setDoneMsg(true);
  };

  // based on value name show car img
  useEffect(() => {
    if (carImg === "Audi A1 S-Line") {
      setImgURL(CarAudi);
    } else if (carImg === "VW Golf 6") {
      setImgURL(CarGolf);
    } else if (carImg === "Toyota Camry") {
      setImgURL(CarToyota);
    } else if (carImg === "BMW 320 ModernLine") {
      setImgURL(CarBmw);
    } else if (carImg === "Mercedes-Benz GLK") {
      setImgURL(CarMercedes);
    } else if (carImg === "VW Passat CC") {
      setImgURL(CarPassat);
    } else {
      setImgURL("");
    }
  }, [carImg]);

  return (
    <>
      <section id="booking-section" className="bookSection">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modalOverlay ${modal ? "activeModal" : ""}`}
        ></div>

        <div className="container">
          <div className="bookContent">
            <div className="bookContentBox">
              <h2>Book a car</h2>

              <p className={error ? "errorMessage active" : "errorMessage"}>
                All fields required!
              </p>

              <p className={doneMsg ? "bookingDone active" : "bookingDone"}>
                Check your email to confirm an order.{" "}
                <i
                  onClick={() => setDoneMsg(false)}
                  className="fa-solid fa-xmark"
                ></i>
              </p>

              <form className="boxForm">
                <div className="carType">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="carType">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="carType">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="carTime">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="carTime">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}
      <Modal
        modal={modal}
        openModal={openModal}
        confirmBooking={confirmBooking}
        pickTime={pickTime}
        pickUp={pickUp}
        dropTime={dropTime}
        dropOff={dropOff}
        carType={carType}
        imgURL={imgURL}
      />
    </>
  );
};

export default BookCar;
