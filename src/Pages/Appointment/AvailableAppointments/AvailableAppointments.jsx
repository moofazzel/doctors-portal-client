import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import AvailableOption from "../AvailableOption/AvailableOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appOption, setAppOption] = useState([]);

  const [treatmentName, setTreatmentName] = useState(null);

  const date = format(selectedDate, "PP");

  // Using TanStack Query method
  const { data: appOption = [], isLoading , refetch} = useQuery({
    queryKey: ["appOption", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });



  return (
    <section>
      <div>
        <p className="text-center text-secondary font-bold my-10">
          Available Appointments on {format(selectedDate, "PP")}
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

      <div className="w-20 mx-auto">
        {isLoading && <LoadingSpinner></LoadingSpinner>}
      </div>


      {treatmentName && (
        <BookingModal
          treatmentName={treatmentName}
          refetch={refetch}
          selectedDate={selectedDate}
          setTreatmentName={setTreatmentName}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
