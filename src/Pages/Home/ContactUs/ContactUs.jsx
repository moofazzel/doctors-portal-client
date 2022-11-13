import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";

const ContactUs = () => {
  return (
    <section
      className="my-32 py-16"
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">Contact Us</h3>
        <h2 className="text-3xl font-semibold text-white">
          Stay connected with us
        </h2>
      </div>
      <div>
        <section className="p-6">
          <form
            novalidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="grid place-items-center grid-cols-1 gap-5 ">
              <div className="col-span-full">
                <input
                  id="username"
                  type="email"
                  placeholder="Email Address"
                  className="md:w-[450px] px-3 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 "
                />
              </div>
              <div className="col-span-full">
                <input
                  id="website"
                  type="text"
                  placeholder="Subject"
                  className="md:w-[450px] px-3 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 "
                />
              </div>
              <div className="col-span-full">
                <textarea
                  rows={5}
                  id="bio"
                  placeholder="Your message"
                  className="md:w-[450px] px-3 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                ></textarea>
              </div>
              <div className="col-span-full">
                <PrimaryBtn>Submit</PrimaryBtn>
              </div>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default ContactUs;
