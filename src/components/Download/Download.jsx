import Img1 from "../../images/download/appstore.svg";
import Img2 from "../../images/download/googleapp.svg";

import "./Download.css";

function Download() {
  return (
    <>
      <section className="downloadSection">
        <div className="container">
          <div className="downloadText">
            <h2>Download our app to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="downloadTextBtns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
