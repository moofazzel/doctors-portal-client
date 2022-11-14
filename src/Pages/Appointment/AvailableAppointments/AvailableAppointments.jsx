import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableOption from "../AvailableOption/AvailableOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [appOption, setAppOption] = useState([]);

  const [treatmentName, setTreatmentName] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppOption(data));
  }, []);

  return (
    <section>
      <div>
        <p className="text-center text-secondary font-bold my-10">
          Available Appointments on {format(selectedDate, "PP")}{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appOption.map((option) => (
          <AvailableOption
            key={option._id}
            appOption={option}
            setTreatmentName={setTreatmentName}
          />
        ))}
      </div>
      {treatmentName && (
        <BookingModal
          treatmentName={treatmentName}
          selectedDate={selectedDate}
          setTreatmentName={setTreatmentName}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
