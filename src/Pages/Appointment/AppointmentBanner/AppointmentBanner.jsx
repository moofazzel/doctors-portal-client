import React, { useState } from "react";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div
        className="hero"
        style={{ background: `url(${bg}) center`, backgroundSize: "cover" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="lg:w-1/2 rounded-lg shadow-2xl"
            alt="logo"
          />
          <div className="lg:w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
