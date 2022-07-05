import React from "react";
import HrCAR from "./HrCAR";

const TitleCar = ({ title, children, type2 }) => {
  let bgClass = type2 ? "bg-green-f" : "bg-acua";

  return (
    <>
      <div className="col-12 d-flex justify-content-center">
        <h5
          className={`${bgClass} border-warning text-white rounded-top-car d-inline-block mt-3 px-5 mb-0 fs-responsive-l f-antipasto`}
        >
          {title || children}
        </h5>
      </div>
      <HrCAR type2={type2} />
    </>
  );
};

export default TitleCar;
