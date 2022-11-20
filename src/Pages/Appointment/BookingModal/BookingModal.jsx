import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../../Context/AuthProvider";

const BookingModal = ({
  treatmentName,
  selectedDate,
  setTreatmentName,
  refetch,
}) => {
  const { name: treatment, slots } = treatmentName;
  const date = format(selectedDate, "PP");

  const { user } = useContext(UserContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const from = e.target;
    const slot = from.slot.value;
    const name = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;
    const date = from.date.value;

    const booking = {
      appointmentDate: date,
      treatment,
      patentName: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`${data.message}`);
        } else {
          toast.error(`${data.error}`);
        }
        setTreatmentName(null);
        refetch()
      });
  };

  return (
    <>
      <input type="checkbox" id="BookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="BookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatment}</h3>

          <form onSubmit={handleBooking} className="grid gap-3 py-5">
            <input
              id="date"
              name="date"
              disabled
              type="text"
              value={date}
              className="font-bold input input-bordered w-full "
            />

            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              required
              id="name"
              defaultValue={user?.displayName}
              disabled
              name="name"
              type="text"
              placeholder="Your Name"
              className=" input input-bordered w-full"
            />
            <input
              required
              id="email"
              defaultValue={user?.email}
              disabled
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <input
              required
              id="phone"
              name="phone"
              type="Phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value={"Submit"}
              className="btn input input-bordered mt-5 w-full bg-slate-700 text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
