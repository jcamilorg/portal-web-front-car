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

export default class Ancestral extends Component {
  state = {
    ancestralVideos: [],
    mainVideo: {},
    videoLeft: {},
  };
  componentDidMount() {
    getData(urlData).then((data) => {
      this.setState(() => {
        let ancestralVideos = data.ancestral.map((item, index) => {
          return item;
        });

        return {
          ancestralVideos: ancestralVideos,
          mainVideo: data.ancestral[0],
          videoLeft: data.ancestral[1],
        };
      });
    });
  }
  render() {
    let moreVideos = this.state.ancestralVideos.map((item, index) => {
      if (index >= 2) {
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
              src={images("./bannerAncestral.png")}
              alt="GranJero"
            />
            <div className="col-8 my-2 p-3 border-dashed border-warning">
              <Iframe link={this.state.mainVideo.link} />
              <h3 className="text-main pt-3">
                <b>{this.state.mainVideo.title}</b>
              </h3>
              <p className="pt-4">
                🥘 Con un típico cocido cundiboyacense a base de productos
                cultivados en huertos caseros damos fin a esta aventura que
                llamamos #Ancestral 🎬📲, una expedición que nos llevó por los
                aromas, saberes y sabores tradicionales de nuestro territorio
                CAR 🦋
              </p>
            </div>
            <div className="col-4 py-2">
              <h4 className="text-green-f">
                <b>últimos capitulos</b>
              </h4>
              <hr className="mt-1 mb-4" />
              <div>
                <img
                  className="img-fluid"
                  src={images("./imgLetfAncestral.png")}
                  alt="GranJero"
                />
              </div>
              <br />
              <Iframe link={this.state.videoLeft.link} />
            </div>

            <div className="row col-12">
              <h4 className="text-green-f pt-3 pb-4">
                <b>Más capítulos de Ancestral</b>
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
