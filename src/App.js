import Modal from "./components/Modal/Modal";
import NavbarLanding from "./components/Navbar-landing/NavbarLanding";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import Hero from "./components/Hero/Hero";
import ExperienceOne from "./components/Experience-one/ExperienceOne";
import TestimonialsOne from "./components/Testimonials/TestimonialsOne";
import ExperienceTwo from "./components/ExperienceTwo/ExperienceTwo";
import TestimonialsTwo from "./components/Testimonials/TestimonialsTwo";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import DoneModal from "./components/Done/DoneModal";

function App() {
  return (
    <div className="App">
      <DoneModal />
      <Modal />
      {/* <Modal /> */}
      <NavbarLanding />
      <SubNavbar />
      <Hero />
      <ExperienceOne />
      <TestimonialsOne />
      <ExperienceTwo />
      <TestimonialsTwo />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
