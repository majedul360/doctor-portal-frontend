import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

const Doctors = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const {
    isLoading,
    error,
    data: services,
  } = useQuery("services", () =>
    fetch("https://doctor-2022.herokuapp.com/services").then((res) =>
      res.json()
    )
  );

  const imgApi = "e069200dfdb44e7555b2f5aeaf6a05dc";

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imgApi}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data.url) {
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.specialist,
            img: result.data.url,
          };
          fetch("https://doctor-2022.herokuapp.com/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((d) => {
              if (d.insertedId) {
                reset();
                alert("doctor added successful");
              }
            });
        }
      })
      .then((e) => {});
  };
  return (
    <div className="max-w-[50rem] mx-auto">
      <h3 className="my-2 text-2xl ">Add Doctors</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="enter your name"
          className="input input-bordered w-full max-w-xs mt-4 mb-3"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && (
          <span className="text-red-500">required</span>
        )}
        <br />
        <input
          type="email"
          placeholder="enter your email"
          className="input input-bordered w-full max-w-xs my-3"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />

        {errors.email?.type === "required" && (
          <span className="text-red-500">required</span>
        )}
        <br />
        <select
          {...register("specialist")}
          className="select select-bordered w-full max-w-xs"
        >
          {services?.map((service) => (
            <option key={service._id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
        <br />
        <input
          type="file"
          className=" w-full max-w-xs my-3"
          {...register("image", { required: true })}
        />
        {errors.image?.type === "required" && (
          <span className="text-red-500">required</span>
        )}
        <br />
        <input
          type="submit"
          className="input input-bordered w-full max-w-xs my-3 btn btn-primary text-white"
          value="add doctor"
        />
      </form>
    </div>
  );
};

export default Doctors;
