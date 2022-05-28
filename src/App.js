import NavbarLanding from "./components/Navbar-landing/NavbarLanding";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import Hero from "./components/Hero/Hero";
import ExperienceOne from "./components/Experience-one/ExperienceOne";
import TestimonialsOne from "./components/Testimonials/TestimonialsOne";
import ExperienceTwo from "./components/ExperienceTwo/ExperienceTwo";
import TestimonialsTwo from "./components/Testimonials/TestimonialsTwo";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
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
