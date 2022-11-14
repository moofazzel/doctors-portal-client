import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatmentName, selectedDate, setTreatmentName }) => {
  const { name, slots } = treatmentName;
  const date = format(selectedDate, "PP");

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
      treatment: name,
      patentName: name,
      slot,
      email,
      phone,
    };

    setTreatmentName(null);
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
          <h3 className="text-lg font-bold">{name}</h3>

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
              name="name"
              type="text"
              placeholder="Your Name"
              className=" input input-bordered w-full"
            />
            <input
            required
              id="email"
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
