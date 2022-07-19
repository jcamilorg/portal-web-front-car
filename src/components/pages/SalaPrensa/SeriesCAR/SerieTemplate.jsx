import React from "react";
import TitleCar from "../../../utils/TitleCar";
import Collapsible from "react-collapsible";
import styled from "styled-components";

import Iframe from "../../../utils/Iframe";

const Accordion = styled.div`
  padding: 2rem 0;

  .Collapsible {
    padding: 0.5rem 0;
  }

  .Collapsible__trigger {
    padding: 0.4rem 0 0.4rem 0.7rem;
    display: block;
    border-bottom: 2px solid #89d335;
  }

  .Collapsible__trigger span {
    padding-left: 0.7rem;
  }

  .Collapsible__trigger i {
    color: #89d335;
  }

  .is-open i {
    transform: rotate(90deg);
  }
`;

const LastChapter = ({ title, link, description }) => (
  <div className="row">
    <h3 className="text-acua">
      <b>{title}</b>
    </h3>
    <div className="col-7">
      <Iframe link={link}></Iframe>
    </div>
    <div className="col-5">
      <h5 className="text-acua">
        <b className="fs-responsive-m">Sinopsis</b>
      </h5>
      <div>{description}</div>
    </div>
  </div>
);

const CollapsibleHeader = ({ title }) => {
  return (
    <>
      <i className="fa-solid fa-caret-right"></i>
      <span>{title}</span>
    </>
  );
};

const CollapsibleBody = ({ children }) => (
  <div className="row pt-4">{children}</div>
);

const SerieTemplate = ({
  title,
  description,
  functionToBringData,
  itemsPerTemp,
  functionToCreateItems,
  functionToCreateLastChapter,
}) => {
  let Videos = functionToBringData(itemsPerTemp);

  let Collapsibles = Videos.map((item, index) => (
    <Collapsible
      transitionTime="400"
      trigger={
        <CollapsibleHeader
          title={`Capítulos Temporada ${Videos.length - index}`}
        />
      }
    >
      <CollapsibleBody>{functionToCreateItems(item)}</CollapsibleBody>
    </Collapsible>
  ));

  return (
    <>
      <TitleCar>
        <b>{title}</b>
      </TitleCar>
      <div className="container px-5 py-5 fs-responsive-m text-main">
        <p>{description}</p>
        {functionToCreateLastChapter(Videos[0][0])}
        <Accordion>{Collapsibles}</Accordion>
      </div>
    </>
  );
};

export default SerieTemplate;
