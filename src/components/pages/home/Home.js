import React from "react";
import Footer from "../../shared/footer/Footer";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Contact from "./Contact";
import Services from "./Services";
import Terms from "./Terms";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <div>
      <Banner />
      <Contact />
      <Services />
      <Terms />
      <Appointment />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
