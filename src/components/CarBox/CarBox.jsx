import { useState } from "react";

import "./CarBox.css";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="boxCars">
          {/* car */}
          <div className="pickCar">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pickDescription">
            <div className="descriptionPrice">
              <span>${car.price}</span>/ rent per day
            </div>
            <div className="descriptionTable">
              <div className="tableCol">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="tableCol">
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className="tableCol">
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className="tableCol">
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className="tableCol">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="tableCol">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="tableCol">
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
