import React from "react";

const DoctorsRow = ({ doctor, index, setOpenModal, setDeleteDoctor }) => {
  const { name, email, speciality, img } = doctor;
  const deleteDoctor = () => {
    setOpenModal(true);
    setDeleteDoctor(doctor);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{speciality}</td>
      <td>
        <label
          htmlFor="doctor-modal"
          className="btn modal-button"
          style={{ background: "red" }}
          onClick={deleteDoctor}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorsRow;
