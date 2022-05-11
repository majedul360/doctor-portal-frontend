import React from "react";
import quote from "../../../assets/icons/quote.svg";
import herry from "../../../assets/images/people1.png";
import winson from "../../../assets/images/people2.png";
import jhonson from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: herry,
      title: "hery",
      contry: "america",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero consectetur architecto impedit doloribus, laudantium reprehenderit tempora aliquam libero eos nemo?",
    },
    {
      id: 2,
      img: winson,
      title: "winson",
      contry: "england",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero consectetur architecto impedit doloribus, laudantium reprehenderit tempora aliquam libero eos nemo?",
    },
    {
      id: 3,
      img: jhonson,
      title: "jhonson",
      contry: "france",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero consectetur architecto impedit doloribus, laudantium reprehenderit tempora aliquam libero eos nemo?",
    },
  ];
  return (
    <div className="px-2 md:px-4 lg:px-20 py-20">
      <div className="flex  justify-between items-center">
        <div className="">
          <h3 className="text-secondary text-2xl">Testimonial</h3>
          <h2 className="text-3xl mt-2">What Our Patient Says</h2>
        </div>
        <img src={quote} className="w-[10rem]" alt="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {testimonials.map((test) => (
          <Testimonial key={test.id} testimonial={test} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
