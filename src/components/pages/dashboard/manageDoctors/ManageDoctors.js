import React, { useState } from "react";
import { useQuery } from "react-query";
import DoctorModal from "../DoctorModal";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const { isLoading, error, data, refetch } = useQuery("manage_doctors", () =>
    fetch("https://doctor-2022.herokuapp.com/doctors", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  const [openModal, setOpenModal] = useState(false);
  const [deleteDoctor, setDeleteDoctor] = useState({});
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>serial</th>
            <th>avatar</th>
            <th>Name</th>
            <th>email</th>
            <th>speciality</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((doctor, index) => (
            <DoctorsRow
              key={doctor._id}
              doctor={doctor}
              index={index}
              setOpenModal={setOpenModal}
              setDeleteDoctor={setDeleteDoctor}
            />
          ))}
        </tbody>
        {openModal && (
          <DoctorModal
            deleteDoctor={deleteDoctor}
            setOpenModal={setOpenModal}
            refetch={refetch}
          />
        )}
      </table>
    </div>
  );
};

export default ManageDoctors;
