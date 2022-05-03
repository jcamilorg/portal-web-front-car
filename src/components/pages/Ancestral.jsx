import React, { Component } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

import Iframe from "../utils/Iframe";
//Import functions
import getData from "../utils/getData";

// Import img
const images = require.context("../../assets/img/", true);
//Impor data
let apiKey = "AIzaSyDaDNHM9CvIqd9Z-jPSKyH586XEU75Yyr4";
let numberOfVideos = "18";
let ancestralVideos = `https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet&maxResults=${numberOfVideos}&channelId=UCDR_Bqz6vCW535ydrXcp4oA&playlistId=PL4Hz7tdqWVVjP3MWnNzsLdwhZCj7MwBPZ&key=${apiKey}`;

export default class Ancestral extends Component {
  state = {
    ancestralVideosUrl: [],
    mainVideo: {
      url: "",
      title: "",
      description: "",
    },
    videoLeftUrl: "",
  };
  componentDidMount() {
    getData(ancestralVideos).then((data) => {
      this.setState(() => {
        let ancestralVideosUrl = data.items.map((item, index) => {
          if (index >= 2) {
            let url =
              "https://www.youtube.com/embed/" +
              item.snippet.resourceId.videoId;
            return url;
          } else {
            return null;
          }
        });
        ancestralVideosUrl = ancestralVideosUrl.filter(Boolean);

        return {
          ancestralVideosUrl: ancestralVideosUrl,
          mainVideo: {
            url:
              "https://www.youtube.com/embed/" +
              data.items[0].snippet.resourceId.videoId,
            title: data.items[0].snippet.title,
            description: data.items[0].snippet.description,
          },
          videoLeftUrl:
            "https://www.youtube.com/embed/" +
            data.items[1].snippet.resourceId.videoId,
        };
      });
    });
  }
  render() {
    let moreVideos = this.state.ancestralVideosUrl.map((item, index) => {
      return (
        <div key={index} className="col-6 col-md-4">
          <Iframe link={item} />
          <br />
        </div>
      );
    });

    return (
      <div>
        <Header />

        <div className="row justify-content-center">
          <div className="row col-9 pb-2 justify-content-center">
            <img
              className="img-fluid"
              src={images("./bannerAncestral.png")}
              alt="GranJero"
            />
            <div className="col-8 my-2 p-3 border-dashed border-warning">
              <Iframe link={this.state.mainVideo.url} />
              <h3 className="text-main pt-3">
                <b>{this.state.mainVideo.title}</b>
              </h3>
              <p className="pt-4">{this.state.mainVideo.description}</p>
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
              <Iframe link={this.state.videoLeftUrl} />
            </div>

            <div className="row col-12">
              <h4 className="text-green-f pt-3 pb-4">
                <b>Más capítulos de Ancestral</b>
              </h4>
              {moreVideos}
            </div>
            <a
              href="https://www.youtube.com/c/ElgranJero/videos"
              className="btn btn-success d-inline col-4 my-3"
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
