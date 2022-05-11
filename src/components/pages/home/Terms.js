import React from "react";
import treatment from "../../../assets/images/treatment.png";
const Terms = () => {
  return (
    <div className=" px-2 md:px-8 lg:px-20 pb-24">
      <div className=" bg-base-100 shadow-xl grid grid-cols-2 items-center">
        <img className="w-3/4 h-[20rem]" src={treatment} alt="Movie" />
        <div>
          <h2 className="card-title">New movie is released!</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatem doloremque qui magni temporibus, libero tempora
            aspernatur cumque itaque totam, eligendi dolorum. Soluta assumenda
            et tempora sed temporibus doloremque ullam!.
          </p>
          <button className="btn btn-primary ">get started</button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
