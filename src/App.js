import About from "./Pages/About/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models/Models";
import TestimonialsPage from "./Pages/TestimonialsPage/TestimonialsPage";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
