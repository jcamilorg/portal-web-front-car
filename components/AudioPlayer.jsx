import React from "react";
import styled from "styled-components";
import Iframe from "./Iframe";

const Container = styled.div`
  border-left: solid 5px #b3e056;
  padding-left: 10px;
  .player {
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 5px #ccc;
    padding: 10px;
    border-radius: 2px;
    margin: 10px 0;
    color: #727272;
  }

  .number {
    font-size: 24px;
    color: #e1e1e1;
    border-right: 2px solid #e1e1e1;
    padding: 0 15px 0 0;
    margin: 0 15px 0 0;
  }

  i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 0 20px 0 0;
    background-color: #017185;
    color: #fff;
  }
`;

const ContainerAll = styled.div`
  .hidden {
    width: 0%;
    animation: hide 1s;
  }

  .visible {
    width: 100%;
    animation: show 1s;
  }

  @keyframes show {
    0% {
      width: 0%;
      height: 0%;
    }
    100% {
      width: 100%;
      height: 100%;
    }
  }

  @keyframes hide {
    0% {
      width: 100%;
      height: 100%;
    }
    100% {
      width: 0%;
      height: 0%;
    }
  }
`;

const AudioPlayer = ({ title, number, src }) => {
  const handlePlay = (e) => {
    const btnPlay = e.target;
    const containerVideo = e.target.parentNode.parentNode.previousSibling;
    const Iframe = containerVideo.firstChild;
    if (Array.from(containerVideo.classList).includes("hidden")) {
      containerVideo.classList.remove("hidden");
      Iframe.classList.remove("hidden");
      btnPlay.classList.remove("fa-play");
      containerVideo.classList.add("visible");
      Iframe.classList.add("visible");
      btnPlay.classList.add("fa-grip-lines");
    } else {
      containerVideo.classList.remove("visible");
      Iframe.classList.remove("visible");
      containerVideo.classList.add("hidden");
      Iframe.classList.add("hidden");
      btnPlay.classList.add("fa-play");
      btnPlay.classList.remove("fa-grip-lines");
    }
  };

  return (
    <ContainerAll>
      <div className=" hidden">
        <Iframe className="hidden" title="Audio" link={src} />
      </div>

      <Container>
        <div className="player">
          <i class="fa-solid fa-play" onClick={handlePlay} role="button"></i>
          <span className="number f-antipasto-bold">{number}</span> {title}
        </div>
      </Container>
    </ContainerAll>
  );
};

export default AudioPlayer;
