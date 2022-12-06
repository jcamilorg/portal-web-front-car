import React from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";

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

const CollapsibleHeader = ({ title }) => {
  return (
    <>
      <i className="fa-solid fa-caret-right"></i>
      <span>{title}</span>
    </>
  );
};

const AccordionCAR = ({ title, children }) => {
  return (
    <>
      <div>AccordionCAR</div>
      <Accordion>
        <Collapsible
          transitionTime="400"
          trigger={<CollapsibleHeader title={title} />}
        >
          {children}
        </Collapsible>
      </Accordion>
    </>
  );
};

export default AccordionCAR;
