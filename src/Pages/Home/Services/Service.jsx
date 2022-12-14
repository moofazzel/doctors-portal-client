import React from "react";

const Service = ({ service }) => {
  const { img, description, name } = service;

  return (
    <div className="card  shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center text-accent">
        <h2 className="card-title">Shoes!</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
