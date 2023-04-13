import Hero from "../components/Hero/Hero";
import BookCar from "../components/BookCar/BookCar";
import PlanTrip from "../components/PlanTrip/PlanTrip";
import PickCar from "../components/PickCar/PickCar";
import Banner from "../components/Banner/Banner";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Faq from "../components/Faq/Faq";
import Download from "../components/Download/Download";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
