import React from "react";

const TitleCar = (props) => {
  let classHr1 = "hr-car hr-type-one bg-acua ";
  let classHr2 = "hr-car hr-type-two bg-green-f ms-1 ";
  let bgClass = "bg-acua";
  if (props.type2) {
    classHr1 = "hr-car hr-type-one bg-green-f ";
    classHr2 = "hr-car hr-type-two bg-acua ms-1 ";
    bgClass = "bg-green-f";
  }

  return (
    <>
      <div className="col-12 d-flex justify-content-center ">
        <h5
          className={`${bgClass} border-warning text-white rounded-top-car d-inline-block mt-3 px-5 mb-0 fs-responsive-l`}
        >
          {props.title}
        </h5>
      </div>
      <div className="col-12 d-flex px-0 mx-0">
        <hr className={classHr1} />
        <hr className={classHr2} />
      </div>
    </>
  );
};

export default TitleCar;
