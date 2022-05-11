import React from "react";
import chair from "../../../assets/images/chair.png";
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 bg-[url('assets/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="pr-4">
          <h1 className="text-5xl font-bold">Your New Smile Stars Here</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            consequuntur dignissimos hic repellendus beatae debitis, iste error
            sed quia distinctio? Dolores optio voluptates soluta ipsa rem
            cupiditate quos sint ab!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
