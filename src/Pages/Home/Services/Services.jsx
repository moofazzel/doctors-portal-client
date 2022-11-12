import React from "react";
import Service from "./Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis totam voluptatibus fugit modi, quas minus.",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis totam voluptatibus fugit modi, quas minus.",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth whitening",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis totam voluptatibus fugit modi, quas minus.",
      img: whitening,
    },
  ];
  return (
    <div className=" mt-16">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl font-semibold">Services We Provide</h2>
      </div>
      <div className="grid text-white mt-8  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
