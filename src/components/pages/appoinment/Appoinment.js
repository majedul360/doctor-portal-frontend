import React, { useState } from "react";
import Footer from "../../shared/footer/Footer";
import Bookings from "./Bookings";
import Hero from "./Hero";
const Appoinment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Hero date={date} setDate={setDate} />
      <Bookings date={date} />
      <Footer />
    </div>
  );
};

export default Appoinment;
