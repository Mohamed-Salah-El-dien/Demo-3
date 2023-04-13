import SelectCar from "../../images/plan/icon1.png";
import Contact from "../../images/plan/icon2.png";
import Drive from "../../images/plan/icon3.png";

import "./PlanTrip.css";

function PlanTrip() {
  return (
    <>
      <section className="planSection">
        <div className="container">
          <div className="planContainer">
            <div className="planTitle">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </div>

            <div className="planBoxes">
              <div className="planBox">
                <img src={SelectCar} alt="icon_img" />
                <h3>Select Car</h3>
                <p>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="planBox">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="planBox">
                <img src={Drive} alt="icon_img" />
                <h3>Let's Drive</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
