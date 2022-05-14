import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Book from "./Book";
import BookingCard from "./BookingCard";

const Bookings = ({ date }) => {
  // const [data, setData] = useState([]);
  const [booking, setBooking] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({});
  const { isLoading, error, data } = useQuery(
    ["available", format(date, "PP")],
    () =>
      fetch(`http://localhost:5000/available/${format(date, "PP")}`).then(
        (res) => res.json()
      )
  );
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available/${format(date, "PP")}`)
  //     .then((res) => res.json())
  //     .then((d) => setData(d));
  // }, [date]);
  return (
    <div className="py-16">
      <h3 className="text-center text-secondary text-2xl capitalize">
        available Appoinment
        {format(date, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-4 lg:px-20 mt-8">
        {data?.map((d) => (
          <BookingCard
            key={d._id}
            bookInfo={d}
            date={date}
            setBooking={setBooking}
            setBookingInfo={setBookingInfo}
          />
        ))}
      </div>
      {booking && (
        <Book date={date} bookingInfo={bookingInfo} setBooking={setBooking} />
      )}
    </div>
  );
};

export default Bookings;
