import React from "react";

const BookingCard = ({ bookInfo, setBooking, setBookingInfo }) => {
  const { name, slots } = bookInfo;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title capitalize">{name}</h2>
          <p>{slots.length ? slots[0] : "Try Next Date"}</p>
          <p className="mb-2">
            {slots.length} {slots.length > 0 ? "spaces" : "space"} Available
          </p>
          <div className="card-actions">
            <label
              htmlFor="book-appointment"
              className="btn btn-primary"
              disabled={slots.length === 0}
              onClick={() => setBooking(true, setBookingInfo(bookInfo))}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
