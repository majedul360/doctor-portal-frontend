import React from "react";

const ContactCard = ({ title, img, bg }) => {
  return (
    <div className={`card card-side p-2 bg-base-100 shadow-xl ${bg}`}>
      <img src={img} alt="Movie" />
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className=" text-white">Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default ContactCard;
