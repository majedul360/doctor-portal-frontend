import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
const Appointment = () => {
  return (
    <div className="hero min-h-screen bg-[url('assets/images/appointment.png')]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={doctor} className=" mt-[-10rem]" />
        <div>
          <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
