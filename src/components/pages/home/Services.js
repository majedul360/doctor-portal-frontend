import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "fluoride treatment",
      desc: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut tempora quam? Laudantium, dolorum ipsum.",
      img: fluoride,
    },
    {
      id: 2,
      title: "cavity filling",
      desc: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut tempora quam? Laudantium, dolorum ipsum.",
      img: cavity,
    },
    {
      id: 3,
      title: "teeth whitening",
      desc: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut tempora quam? Laudantium, dolorum ipsum.",
      img: whitening,
    },
  ];
  return (
    <div className="pb-20">
      <h3 className="text-center text-2xl uppercase text-secondary mb-2">
        our services
      </h3>
      <h2 className="text-center text-3xl  uppercase">services we provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-2 md:px-8 lg:px-20">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
