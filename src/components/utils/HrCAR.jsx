import React from "react";
import styled from "styled-components";

const Hr1 = styled.hr`
  opacity: 100;
  margin: 0;
  padding-top: 3px;
  border-radius: 3px;
  width: 70%;
`;
const Hr2 = styled.hr`
  opacity: 100;
  margin: 0;
  padding-top: 3px;
  border-radius: 3px;
  width: 29.5%;
`;

const HrGreen = styled.hr`
  opacity: 100;
  padding-top: 3px;
  border-radius: 3px;
  background-color: #89d335;
`;

const HrCAR = ({ type2, className, style }) => {
  const content = type2 ? (
    <>
      <Hr1 className="bg-green-f" />
      <Hr2 className="bg-acua ms-1" />
    </>
  ) : (
    <>
      <Hr1 className="bg-acua" />
      <Hr2 className="bg-green-f ms-1" />
    </>
  );

  return (
    <div className={"col-12 d-flex " + className} style={style}>
      {content}
    </div>
  );
};

export default HrCAR;

export { HrGreen };
