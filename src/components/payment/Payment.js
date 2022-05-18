import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["booking", id], () =>
    fetch(`https://doctor-2022.herokuapp.com/booking/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h3>Hellow {data?.name}</h3>
          <h4>Please pay for {data?.treatment}</h4>
          <p>
            You appointment {data?.date} at {data?.slot} confirmed{" "}
          </p>
          <p>Please pay ${data?.price}</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mt-4">
        <div className="card-body">
          <h3>Payment</h3>
        </div>
      </div>
    </>
  );
};

export default Payment;
