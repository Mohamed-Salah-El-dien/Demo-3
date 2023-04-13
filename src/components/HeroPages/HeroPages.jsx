import { Link } from "react-router-dom";

import "./HeroPages.css";

function HeroPages({ name }) {
  return (
    <>
      <section className="heroPages">
        <div className="heroPagesOverlay"></div>
        <div className="container content">
          <div className="heroPagesText">
            <h3>{name}</h3>
            <p>
              <Link to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
