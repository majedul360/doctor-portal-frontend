import React from "react";

const Testimonial = ({ testimonial }) => {
  const { img, title, desc, country } = testimonial;
  return (
    <div className="mt-4">
      <p className="my-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        culpa eveniet fuga incidunt, saepe amet, non, nesciunt inventore error
        ipsum blanditiis nemo praesentium quisquam iure harum sunt beatae illo
        deserunt!
      </p>
      <div className="card card-side bg-base-100 shadow-xl p-2">
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-title">{country}</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
