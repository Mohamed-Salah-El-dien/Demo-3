import Footer from "../../components/Footer/Footer";
import HeroPages from "../../components/HeroPages/HeroPages";
import Person1 from "../../images/team/1.png";
import Person2 from "../../images/team/2.png";
import Person3 from "../../images/team/3.png";
import Person4 from "../../images/team/4.png";
import Person5 from "../../images/team/5.png";
import Person6 from "../../images/team/6.png";

import "./Team.css";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  ];
  return (
    <>
      <section className="teamPage">
        <HeroPages name="Our Team" />
        <div className="container">
          <div className="teamContainer">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="teamBox">
                <div className="teamImg">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="teamBoxDescr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
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

export default Team;
