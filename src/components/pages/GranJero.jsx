import React, { Component } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import StickyMenu from "../utils/StickyMenu";
import Iframe from "../utils/Iframe";
//Import functions
import getData from "../utils/getData";

// Import img
const images = require.context("../../assets/img/", true);
//Impor data
let urlData = "../data.json";

export default class GranJeroPage extends Component {
  state = {
    granJeroVideos: [],
    mainVideo: {},
    videoLeftTop: {},
    videoLeftBottom: {},
  };
  componentDidMount() {
    getData(urlData).then((data) => {
      this.setState(() => {
        let granJeroVideos = data.granJero.map((item, index) => {
          return item;
        });

        return {
          granJeroVideos: granJeroVideos,
          mainVideo: data.granJero[0],
          videoLeftTop: data.granJero[1],
          videoLeftBottom: data.granJero[2],
        };
      });
    });
  }
  render() {
    let moreVideos = this.state.granJeroVideos.map((item, index) => {
      if (index >= 3) {
        return (
          <div className="col-3">
            <Iframe link={item.link} />
            <br />
          </div>
        );
      } else {
        return <React.Fragment />;
      }
    });

    return (
      <div>
        <Header />
        <br />
        <StickyMenu url={urlData} />

        <div className="row justify-content-center">
          <div className="row col-9 py-2 justify-content-center">
            <img
              className="img-fluid"
              src={images("./bannerGranJero.png")}
              alt="GranJero"
            />
            <div className="col-8 my-2 p-3 border-dashed border-danger">
              <h3 className="text-main">
                <b>{this.state.mainVideo.title}</b>
              </h3>
              <Iframe link={this.state.mainVideo.link} />
            </div>
            <div className="col-4 py-2">
              <h4 className="text-green-f">
                <b>últimos capitulos</b>
              </h4>
              <hr className="mt-1 mb-4" />
              <Iframe link={this.state.videoLeftTop.link} />
              <br />
              <Iframe link={this.state.videoLeftBottom.link} />
            </div>

            <div className="row col-12">
              <h4 className="text-main pt-3 pb-4">
                <b>Más capítulos de El GranJero</b>
              </h4>
              {moreVideos}
            </div>
            <a
              href="https://www.youtube.com/c/ElgranJero/videos"
              class="btn btn-success d-inline col-4 my-3"
            >
              <b>Todos los capítulos aquí</b>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
