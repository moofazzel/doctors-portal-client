import React, { useState } from "react";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import BookingModal from "../BookingModal/BookingModal";

const AvailableOption = ({ appOption, setTreatmentName }) => {
  const { name, slots } = appOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center gap-2">
        <h2 className="card-title text-2xl text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions">
          <label
            disabled={slots.length === 0}
            htmlFor="BookingModal"
            onClick={() => setTreatmentName(appOption)}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableOption;
