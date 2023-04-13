import Footer from "../../components/Footer/Footer";
import HeroPages from "../../components/HeroPages/HeroPages";
import Testimonials from "../../components/Testimonials/Testimonials";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
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

export default TestimonialsPage;
