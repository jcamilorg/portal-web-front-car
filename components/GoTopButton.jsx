import React, { useEffect } from "react";
import styled from "styled-components";

const BtnGoToTopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
  .show {
    visibility: visible;
    animation: popup 0.4s ease-in-out;
  }

  .hidden {
    visibility: hidden !important;
  }

  @keyframes popup {
    0% {
      width: 0rem;
      height: 0rem;
    }
    80% {
      width: 5rem;
      height: 5rem;
    }
    100% {
      width: 4rem;
      height: 4rem;
    }
  }
`;

const BtnGoToTop = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  background-color: #00a19c;
  color: #fff;
  border-style: none;

  i {
    font-size: 1.2rem;
  }

  .show {
    visibility: visible;
    animation: popup2 0.3s ease-in-out;
  }

  .hidden {
    visibility: hidden;
  }

  @keyframes popup2 {
    0% {
      font-size: 0;
    }
    80% {
      font-size: 1.3rem;
    }
    100% {
      font-size: 1.2rem;
    }
  }
`;

const GoTopButton = () => {
  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 500) {
        document.querySelector("#GoTopButton").classList.add("show");
        document.querySelector("#arrowGoToTop").classList.add("show");
        document.querySelector("#GoTopButton").classList.remove("hidden");
        document.querySelector("#arrowGoToTop").classList.remove("hidden");
      } else {
        document.querySelector("#GoTopButton").classList.add("hidden");
        document.querySelector("#arrowGoToTop").classList.add("hidden");
        document.querySelector("#GoTopButton").classList.remove("show");
        document.querySelector("#arrowGoToTop").classList.remove("show");
      }
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BtnGoToTopContainer
      className="position-fixed"
      style={{ bottom: "5%", right: "5%" }}
    >
      <BtnGoToTop
        onClick={handleGoToTop}
        id="GoTopButton"
        type="button"
        className="hidden"
      >
        <i id="arrowGoToTop" className="fa-solid fa-angle-up hidden"></i>
      </BtnGoToTop>
    </BtnGoToTopContainer>
  );
};

export default GoTopButton;
