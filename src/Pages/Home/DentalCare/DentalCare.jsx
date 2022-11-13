import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";

const DentalCare = () => {
  return (
    <div className="lg:flex px-5 py-14 lg:pl-36 lg:mt-40 lg:mb-20 lg:pr-28">
      <div className="">
        <img className="mx-8 lg:mx-0 lg:min-w-[400px] xl:min-w-[440px] rounded-lg" src={treatment} alt="treatment" />
      </div>
      <div className="lg:pl-20 xl:pl-28 pt-8">
        <h2 className="text-5xl font-semibold mb-7">Exceptional Dental Care, on Your Terms</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page.
        </p>
        <div className="pt-11">
        <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
