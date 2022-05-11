import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import ContactCard from "./contactCard";
const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-2 md:px-8 lg:px-20">
      <ContactCard
        title="opening hours"
        img={clock}
        bg="bg-gradient-to-r from-secondary to-primary"
      />
      <ContactCard title="visit our location" img={marker} bg="bg-neutral" />
      <ContactCard
        title="contact us now"
        img={phone}
        bg="bg-gradient-to-r from-secondary to-primary"
      />
    </div>
  );
};

export default Contact;
