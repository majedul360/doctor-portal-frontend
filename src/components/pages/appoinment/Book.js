import { format } from "date-fns/esm";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.int";
const Book = ({ date, bookingInfo, setBooking }) => {
  const { name, slots } = bookingInfo;
  const [user, loading, error] = useAuthState(auth);
  const formHandler = (e) => {
    e.preventDefault();
    const slot = e.target.slots.value;
    console.log(slot);
    setBooking(false);
  };
  return (
    <div>
      <input type="checkbox" id="book-appointment" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book-appointment"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold capitalize">{name}</h3>
          <form action="" onSubmit={formHandler} className="text-center mt-4">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs my-4"
            />
            <select
              name="slots"
              className="select select-bordered w-full max-w-xs my-4"
            >
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              disabled
              value={user ? user?.displayName : " "}
              className="input input-bordered w-full max-w-xs my-4"
              name="name"
            />
            <input
              type="email"
              disabled
              value={user ? user?.email : ""}
              className="input input-bordered w-full max-w-xs my-4"
              name="email"
            />
            <input
              type="password"
              placeholder="enter your password"
              className="input input-bordered w-full max-w-xs my-4"
              name="password"
            />{" "}
            <br />
            <input
              type="submit"
              value="submit"
              className="btn btn-primary w-2/3 mt-4 capitalize"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
