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
//api youtube to list videos
let apiKey = "AIzaSyDaDNHM9CvIqd9Z-jPSKyH586XEU75Yyr4";
let numberOfVideos = "19";
let GranJeroVideos = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UC8oglW3vOZU0ypk84ktFZ3Q&maxResults=${numberOfVideos}&type=video&key=${apiKey}`;

export default class GranJeroPage extends Component {
  state = {
    granJeroVideosUrl: [],
    mainVideo: {
      url: "",
      title: "",
    },
    videoLeftTopUrl: {},
    videoLeftBottomUrl: {},
  };
  componentDidMount() {
    getData(GranJeroVideos).then((data) => {
      this.setState(() => {
        let granJeroVideosUrl = data.items.map((item, index) => {
          if (index >= 3) {
            let url = "https://www.youtube.com/embed/" + item.id.videoId;
            return url;
          } else {
            return null;
          }
        });
        granJeroVideosUrl = granJeroVideosUrl.filter(Boolean);

        return {
          granJeroVideosUrl: granJeroVideosUrl,
          mainVideo: {
            url: "https://www.youtube.com/embed/" + data.items[0].id.videoId,
            title: data.items[0].snippet.title,
          },
          videoLeftTopUrl:
            "https://www.youtube.com/embed/" + data.items[1].id.videoId,
          videoLeftBottomUrl:
            "https://www.youtube.com/embed/" + data.items[2].id.videoId,
        };
      });
    });
  }
  render() {
    let moreVideos = this.state.granJeroVideosUrl.map((item, index) => {
      return (
        <div key="index" className="col-6 col-md-4 col-lg-3">
          <Iframe link={item} />
          <br />
        </div>
      );
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
              <Iframe link={this.state.mainVideo.url} />
            </div>
            <div className="col-4 py-2">
              <h4 className="text-green-f">
                <b>últimos capitulos</b>
              </h4>
              <hr className="mt-1 mb-4" />
              <Iframe link={this.state.videoLeftTopUrl} />
              <br />
              <Iframe link={this.state.videoLeftBottomUrl} />
            </div>

            <div className="row col-12">
              <h4 className="text-main pt-3 pb-4">
                <b>Más capítulos de El GranJero</b>
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
