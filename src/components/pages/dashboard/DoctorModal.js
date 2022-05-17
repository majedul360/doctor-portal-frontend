import React from "react";

const DoctorModal = ({ deleteDoctor, setOpenModal, refetch }) => {
  const { name, email, speciality, img } = deleteDoctor;
  const removeDoctor = (mail) => {
    fetch(`https://doctor-2022.herokuapp.com/doctor/${mail}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOpenModal(false);
        refetch();
        alert("delete successful");
      });
  };
  return (
    <>
      <input type="checkbox" id="doctor-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="py-4">{speciality}</p>
          <div className="modal-action">
            <label
              className="btn"
              style={{ background: "red" }}
              onClick={() => removeDoctor(email)}
            >
              Delete
            </label>
            <label htmlFor="doctor-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorModal;
